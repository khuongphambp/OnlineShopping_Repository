import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminDisplayProductsComponent } from './Admin/admin-display-products/admin-display-products.component';
import { AdminCreateProductsComponent } from './Admin/admin-create-products/admin-create-products.component';
import { AdminFooterComponent } from './Admin/admin-footer/admin-footer.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditProductComponent } from './Admin/admin-edit-product/admin-edit-product.component';
import { ProductService } from './Services/ProductServices.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { from } from 'rxjs';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ng2-tooltip-directive';

const appRoutes : Routes = [
  {
    path : "display",
    component : AdminDisplayProductsComponent
  },{
    path : "create",
    component : AdminCreateProductsComponent
  },{
    path : "",
    component : AdminDisplayProductsComponent
  },{
    path : "edit/:id",
    component : AdminEditProductComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminDisplayProductsComponent,
    AdminCreateProductsComponent,
    AdminFooterComponent,
    AdminIndexComponent,
    AdminEditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
