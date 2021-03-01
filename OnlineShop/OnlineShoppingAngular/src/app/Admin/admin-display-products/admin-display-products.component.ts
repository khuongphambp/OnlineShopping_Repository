import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Classes/Product';
import { ProductService } from 'src/app/Services/ProductServices.service';

@Component({
  selector: 'app-admin-display-products',
  templateUrl: './admin-display-products.component.html',
  styleUrls: ['./admin-display-products.component.css']
})
export class AdminDisplayProductsComponent implements OnInit {

  listProduct : Product[]  = [];
  bookname :any;
  page : number = 1;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      (response : any)=>{
        console.log(response.items);
        this.listProduct = response.items;
      });
  }

Search(){
  if(this.bookname == ""){
    this.ngOnInit();
  }else{
    this.listProduct = this.listProduct.filter(response => {
      return response.bookName.toLocaleLowerCase().match(this.bookname.toLocaleLowerCase());
    });
  }
}

}
