import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //DI (DEpendency Injection)
  constructor(private router: Router,
              private rest:RestService) { }

  isError =false;

  ngOnInit() {
    if(this.rest.isLoggedIn() == true){
      this.router.navigate(["/stock"]);
    }
  }
   async onClickSubmit(value) {
    // this.httpClient.post("http://localhost:8085/api/v2/authen/login",value).subscribe(result=>{
    //   alert(JSON.stringify(result));
    // })
    //   this.httpClient.post("http://localhost:8085/api/v2/authen/login",value).toPromise().then(result=>{
    //     alert(JSON.stringify(result));
    // })
    let result = await this.rest.login( value).toPromise();
    if (result.result == "ok"){
        localStorage.setItem(environment.loginResult,"ok")
        this.isError = false;
        this.router.navigate(["/stock"]);

    }else{
        this.isError = true;

    }
    //alert(JSON.stringify(result));
  }
  onClickREgister() {
    this.router.navigate(["register"])

  }

}
