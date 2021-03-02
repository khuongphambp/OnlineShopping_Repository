import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Product } from "../Classes/Product";
import { ProductDto } from "../Classes/ProductDto";

@Injectable()
export class ProductService{

     private BaseUrl = "https://localhost:44320/api/app/book";

     MaxResulCount = "?MaxResultCount=100";
     
    constructor(private httpclient : HttpClient){}

   getProducts() : Observable<any> {
        return this.httpclient.get(this.BaseUrl+this.MaxResulCount);
   }

   getProduct(id:string | null) : Observable<any> {
     return this.httpclient.get(this.BaseUrl+'/'+id);
}

   createProduct(product : ProductDto){
        return this.httpclient.post(this.BaseUrl, product);
   }

   deleteProduct(id : string){
     return this.httpclient.delete(this.BaseUrl + '/' + id);
   }

   editProduct(id : string,product : Product){
     return this.httpclient.put(this.BaseUrl + '/' +id, product);
   }
}