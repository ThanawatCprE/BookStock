import { Location } from '@angular/common';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
  mProduct = {
    id: "",
    name: "",
    price: 0,
    stock: 0,
    image: null
  }
  
  baseUrl = environment.baseUrl;
  public imageSrc: any = null;
  node_static_url = environment.backendUrl;
  mIsSubmitted = false;

  constructor(private route:ActivatedRoute, private rest:RestService, private location:Location) { }

  ngOnInit() {
    this.route.params.subscribe(async params=>{
      let id = params["id"]
      this.mProduct = await this.rest.getProductById(id).toPromise();  
    })
  }
  async onEditProduct(){
    let formData = new FormData();
    formData.append("id", this.mProduct.id);
    formData.append("name", this.mProduct.name);
    formData.append("stock", this.mProduct.stock.toString());
    formData.append("price", this.mProduct.price.toString());
    formData.append("image", this.mProduct.image);
    
    await this.rest.updateProduct(formData).toPromise();

    Swal.fire({
      title: "Edit successfully",
      text: "Click close button to back to the stock page",
      type: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Close"
    }).then(result => {
       this.location.back();
    });
    
  }
  onUploadImage(event) {
    this.mProduct.image = event.target.files[0];
    
    // Show preview image
    if (this.mProduct.image) {
      const reader = new FileReader();
      reader.onload = e => (this.imageSrc = reader.result);
      reader.readAsDataURL(this.mProduct.image);
    }
  }
  onClickCancel(){
    this.location.back();
  
  }

}
