import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Classes/Product';
import { ProductService } from 'src/app/Services/ProductServices.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {

  product = new Product('','','','');
  productId : any;

  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.productId= this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productId).subscribe(data=>{
      this.product = data;
    console.log(this.product);
    console.log(this.productId);
      
    })

}

onSubmit(){
  this.productService.editProduct(this.productId,this.product)
  .subscribe(
    data =>{
      alert('Update Success'),
      this.router.navigateByUrl('/display');
    }
    
  )
  
}

}
