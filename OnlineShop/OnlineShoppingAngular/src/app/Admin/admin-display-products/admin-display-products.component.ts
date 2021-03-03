import { Component, OnInit } from '@angular/core';
import { BookParameter } from 'src/app/Classes/BookParameter';
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
  bookparameter = new BookParameter(1,3);

  constructor(private productService : ProductService) {
   
   }

  ngOnInit(): void {
    this.getProductbyPage();
  }

  getProductbyPage(){
    this.productService.getProductByPage(this.bookparameter).subscribe(
      (response : any)=>{
        this.listProduct = response.bookDtos;
        console.log(response);
        this.totalpage = response.totalPage;
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

onChange(pagesize:any) {
  this.bookparameter.pageSize = pagesize;
  if(this.bookparameter.pageNumber = this.totalpage){
    this.bookparameter.pageNumber = 1;
    this.ngOnInit();
  }else{
    this.getProductbyPage();
  }
}

onDelete(id:string){
  this.productService.deleteProduct(id).subscribe(data=>{
    alert('Delete Successfully'),
    this.ngOnInit();
  })
}

changepage(currenPage:number){
  this.bookparameter.pageNumber = currenPage;
  this.getProductbyPage();
}

nextPage(){
  if(this.bookparameter.pageNumber != this.totalpage){
    this.bookparameter.pageNumber+=1;
    this.getProductbyPage();
  }else{
    this.getProductbyPage();
  }
}

prePage(){
  if(this.bookparameter.pageNumber != 1){
    this.bookparameter.pageNumber-=1;
    this.getProductbyPage();
  }else{
    this.getProductbyPage();
  }
}

arrayOne(): any[] {
  return Array(this.totalpage);
}

}
