import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  userId: any = sessionStorage.getItem('userid');
  mycartdata: any;
  //productData!:any[];
  form!: FormGroup;

  productData: any;

  product: any;
  i: any;
  k: any;
  totalprice: any;
  price: any;
  mycart: any;
  quantity: any
  prodDataArray!: any[];

  element: any;

  constructor(private dataservice: UserserviceService, private productservice: ProductService, private mycartservice: UserserviceService,
    private router: Router) { }

  grtOrderdata() {
    this.dataservice.getMyCartDataByUserId(this.userId).subscribe((data) => {
      this.mycartdata = data
      console.log("length" + this.mycartdata.length);
      console.log(this.mycartdata);
      sessionStorage.setItem('badge', this.mycartdata.length);
    })
  }

  delete(id: any) {
    console.log("delete id" + id);
    this.mycartservice.deleteMyCartProduct(id).subscribe((res) => {
      alert("product removed from the cart");
    })

  }

  ngOnInit(): void {
    this.grtOrderdata();
  }

}
