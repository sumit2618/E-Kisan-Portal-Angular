import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpclient: HttpClient) { }


  saveProductDetail(data: any) {
    return this.httpclient.post("http://localhost:8080/saveProductDetails", data)
  }

  updateProduct(id: any, data: any) {
    return this.httpclient.put("http://localhost:8080/updateProductById/" + id, data)
  }

  //show list of product
  getProductData() {
    return this.httpclient.get("http://localhost:8080/getProductDetails");
  }

  //show product by product id
  getProductById(id: any) {
    return this.httpclient.get("http://localhost:8080/getProductById/" + id)
  }

  //delete Product by product id
  deleteProduct(id: any) {
    return this.httpclient.delete("http://localhost:8080/deleteProductById/" + id);
  }
}
