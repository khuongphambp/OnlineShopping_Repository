import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { BookParameter } from "../Classes/BookParameter";
import { Product } from "../Classes/Product";
import { ProductDto } from "../Classes/ProductDto";
import * as bookenvironment from 'src/app/environment/bookenvironment.json';


@Injectable()
export class ProductService {

  private BaseUrl = bookenvironment.bookApi;

  constructor(private httpclient: HttpClient) { }

  getProductByPage(bookparameter: BookParameter): Observable<any> {
    return this.httpclient.get(this.BaseUrl + '/?pageNumber=' + bookparameter.pageNumber + '&pageSize=' + bookparameter.pageSize);
  }

  getProduct(id: string | null): Observable<any> {
    return this.httpclient.get(this.BaseUrl + '/' + id);
  }

  createProduct(product: ProductDto) {
    return this.httpclient.post(this.BaseUrl, product);
  }

  deleteProduct(id: string) {
    return this.httpclient.delete(this.BaseUrl + '/' + id);
  }

  editProduct(id: string, product: Product) {
    return this.httpclient.put(this.BaseUrl + '/' + id, product);
  }

}