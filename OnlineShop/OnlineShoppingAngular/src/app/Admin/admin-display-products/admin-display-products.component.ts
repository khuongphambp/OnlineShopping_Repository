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
  totalpage : any;
  config: any;

  constructor(private productService : ProductService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1
    };
   }

  ngOnInit(): void {
    this.productService.getProductByPage(1,5).subscribe(
      (response : any)=>{
        this.listProduct = response.item1;
        console.log(response.item2);
        this.totalpage = response.item2;
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

changepage(currenPage:number){
  this.productService.getProductByPage(currenPage,5).subscribe(
    (response : any)=>{
      this.listProduct = response.item1;
      console.log(response.item2);
      this.totalpage = response.item2;
    });
}

changepage1(){
  console.log("Hello")
    
}

pageChanged(event:any){
  this.config.currentPage = event;
}

arrayOne(): any[] {
  return Array(this.totalpage);
}

}
