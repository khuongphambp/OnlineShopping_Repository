import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";

@Injectable()
export class ProductService{

    constructor(private httpclient : HttpClient){}


   getProduct() : Observable<any> {
        return this.httpclient.get('https://localhost:44320/api/app/book');
   }
}