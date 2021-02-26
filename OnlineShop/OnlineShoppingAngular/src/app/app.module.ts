import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminDisplayProductsComponent } from './Admin/admin-display-products/admin-display-products.component';
import { AdminCreateProductsComponent } from './Admin/admin-create-products/admin-create-products.component';
import { AdminFooterComponent } from './Admin/admin-footer/admin-footer.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditProductComponent } from './Admin/admin-edit-product/admin-edit-product.component';

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
    path : "edit",
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
