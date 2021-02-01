import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-view-specific-product',
  templateUrl: './view-specific-product.component.html',
  styleUrls: ['./view-specific-product.component.css']
})
export class ViewSpecificProductComponent implements OnInit {

  constructor(private productservice: ProductService,
    private router: Router,
    private activatedroute: ActivatedRoute, private userservice: UserserviceService) { }

  product: any = []
  id: any
  form!: FormGroup
  mycart: any;
  data: any = [];
  productId: any;
  prodName: any;
  price: any;

  userId: any = sessionStorage.getItem('userid');


  getData() {
    this.activatedroute.params.subscribe((param) => {
      this.id = param["id"]
      this.productservice.getProductById(this.id).subscribe((data) => {
        this.product = data;
        console.log(this.product)
      })
    })
  }

  saveInMyCart(productId: any, prodName: any, price: any, image: any) {
    if (this.userId > 0) {
      if (this.form.value.quantity > 0) {
        var data = {
          productId: productId,
          prodName: prodName,
          price: price,
          userId: this.userId,
          quantity: this.form.value.quantity,
          image: image,
        };

        console.log("prodId" + productId + " name" + prodName + " Price" + price + " Quantity" + this.form.value.quantity + " image" + image);

        this.userservice.saveMyCartProductDetail(data).subscribe((res) => {
          this.mycart = res;
          console.log(this.mycart);
        })
        alert("product added to the cart successfully");
      }
      else {
        alert("please enter the quantity");
      }
    }
    else {
      alert("please login");
    }
  }

  ngOnInit(): void {
    this.getData();
    this.form = new FormGroup({
      id: new FormControl(this.id),
      quantity: new FormControl(""),
    })
  }
}
