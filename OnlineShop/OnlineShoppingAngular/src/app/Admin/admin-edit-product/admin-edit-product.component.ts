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

  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(data=>{
      this.product = data;
    console.log(this.product);
    })

}

onSubmit(){
  this.productService.editProduct(this.product.id,this.product)
  .subscribe(
    data =>{
      alert('Update Success'),
      this.router.navigateByUrl('/display');
    }
    
  )
  
}

}
