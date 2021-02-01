import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {

  constructor(private productservice: ProductService, private router: Router, private httpClient: HttpClient) { }

  form!: FormGroup;

  product: any;

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  image: any;
  data: any;

    //Gets called when the user selects an image
    public onFileChanged(event: any) {
      //Select File
      this.selectedFile = event.target.files[0];
      console.log("bro here " + this.selectedFile.name);
      this.form.value.image = this.selectedFile.name;
    }

    onSubmit() {
      this.productservice.saveProductDetail(this.form.value).subscribe((res) => {
        this.product = res;
        if (this.product != null) {
          alert("Product registred sucessfully ")
          //this.router.navigateByUrl("myAccount");
        }
      })
    }
    
  ngOnInit(): void {
    this.form = new FormGroup({
      categoryId:new FormControl(""),
      prodName:new FormControl(""),
      prodBrand:new FormControl(""),
      prodDescription:new FormControl(""),
      price:new FormControl(""),
      offerPrice:new FormControl(""),
      prodForm:new FormControl(""),
      quantity:new FormControl(""),
      expDate:new FormControl(""),
      image:new FormControl(""),
      sizePack:new FormControl(""),
      organic:new FormControl(""),
      color:new FormControl(""),
      stateOrigin:new FormControl(""),
      modelNo:new FormControl(""),
      powerSource:new FormControl("")
    })
  }
}
