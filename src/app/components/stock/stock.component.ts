import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import { Router } from '@angular/router';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  mDataArray: any[] = [];
  baseUrl = environment.baseUrl;
  node_static_url = environment.backendUrl;
  constructor(private rest: RestService,
              private router:Router) { }

  async ngOnInit() {
    let result = await this.rest.getProducts().toPromise();
    this.mDataArray = result;
  }
  editProduct(id) {
    this.router.navigate(["/stock/edit/"+id]);

  }
  
  public get timestamp() : string {
    return Date.now().toString()
  }
  

  async deleteProduct(id) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it"
    }).then(async result => {
      if (result.value) {
        await this.rest.deleteProduct(id).toPromise();
        this.mDataArray = await this.rest.getProducts().toPromise();
      }
    });

  }
  async onSearch(keyword){
    if (keyword != ""){
      this.mDataArray =await this.rest.getProductByKeyword(keyword).toPromise();
    }else{
      this.mDataArray =await this.rest.getProducts().toPromise();
    }
  }
    
}
