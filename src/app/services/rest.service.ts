import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});  
  private hostUrl = environment.backendUrl;
  private authenApiUrl = `${this.hostUrl}api/v2/authen`;
  private stockApiUrl = `${this.hostUrl}api/v2/stock`;
  private loginUrl = `${this.authenApiUrl}/login`;
  private registerUrl = `${this.authenApiUrl}/register`; 
  private productUrl = `${this.stockApiUrl}/product`;  

  constructor(private http:HttpClient) { }
  login(usernamePassword){
    return this.http.post<any>(this.loginUrl,usernamePassword,{headers: this.headers});
  }
  register(usernamePassword){
    return this.http.post<any>(this.registerUrl, usernamePassword, {headers: this.headers})
  }
  isLoggedIn(){
    let loginResult = localStorage.getItem(environment.loginResult);
    return (loginResult != null && loginResult == 'ok')
  }
  getProducts(){
    return this.http.get<any[]>(this.productUrl, {headers: this.headers})
  }
  addProduct(product){    
    return this.http.post<any>(this.productUrl, product);
  }

  deleteProduct(id) { 
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<void>(url, {headers: this.headers});
  }

  updateProduct(product){           
    return this.http.put<any>(this.productUrl, product);
  }
  
  getProductById(id:number) {
    const url = `${this.productUrl}/${id}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }

  getProductByKeyword(keyword : String) {
    const url = `${this.productUrl}/keyword/${keyword}`;
    return this.http.get<any[]>(url);    
  }

}
