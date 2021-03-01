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
  config: any;

  constructor(private productService : ProductService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1
    };
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response : any)=>{
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

onDelete(id:string){
  this.productService.deleteProduct(id).subscribe(data=>{
    alert('Delete Successfully'),
    this.ngOnInit();
  })
}

pageChanged(event:any){
  this.config.currentPage = event;
}

}
