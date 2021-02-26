import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { AdminComponent } from './Admin/admin/admin.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './Admin/admin-footer/admin-footer.component';
import { AdminDisplayProductsComponent } from './Admin/Pages/admin-display-products/admin-display-products.component';
import { AdminCreateProductsComponent } from './Admin/Pages/admin-create-products/admin-create-products.component';
import { AdminEditProductsComponent } from './Admin/Pages/admin-edit-products/admin-edit-products.component';
import { RouterModule, Routes } from '@angular/router';

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
    component : AdminEditProductsComponent
  }
]

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    ThemeSharedModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    NgxsModule.forRoot(),
    ThemeBasicModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, AdminComponent, AdminHeaderComponent, AdminFooterComponent, AdminDisplayProductsComponent, AdminCreateProductsComponent, AdminEditProductsComponent],
  providers: [APP_ROUTE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
