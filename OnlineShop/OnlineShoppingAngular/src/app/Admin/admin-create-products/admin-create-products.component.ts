import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Classes/Product';
import { ProductDto } from 'src/app/Classes/ProductDto';
import { ProductService } from 'src/app/Services/ProductServices.service';

@Component({
  selector: 'app-admin-create-products',
  templateUrl: './admin-create-products.component.html',
  styleUrls: ['./admin-create-products.component.css']
})
export class AdminCreateProductsComponent implements OnInit {

  testProduct = new ProductDto('','','');

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.productService.createProduct(form.value)
    .subscribe(reponse=>{
      alert('Add Sucess');
      this.router.navigateByUrl("display");
    },(error)=>{
      alert(error.error.title);
    }
    )
  }

}
