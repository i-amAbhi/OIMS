import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CategoryComponent } from './Components/category/category.component';
import { ProductsComponent } from './Components/products/products.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { InwardComponent } from './Components/inward/inward.component';
import { ReportComponent } from './Components/report/report.component';
import { ExportComponent } from './_shared/export/export.component';
import { GraphComponent } from './_shared/graph/graph.component';
import { FilterComponent } from './_shared/filter/filter.component';
import { CommonLookupComponent } from './System/common-lookup/common-lookup.component';
import { SupplierComponent } from './System/supplier/supplier.component';
import { DepartmentComponent } from './System/department/department.component';
import { StatusComponent } from './System/status/status.component';
import { ProductAssignedComponent } from './System/product-assigned/product-assigned.component';
import { ModuleComponent } from './System/module/module.component';
import { RolesComponent } from './System/roles/roles.component';
import { PaginationComponent } from './_shared/pagination/pagination.component';
import { AssetsAvailableComponent } from './Components/assets-available/assets-available.component';
import { AssetsOutofstockComponent } from './Components/assets-outofstock/assets-outofstock.component';
import { ChangePasswordComponent } from './_shared/change-password/change-password.component';
import { AddProductComponent } from './_shared/add-product/add-product.component';
import { AddCategoryComponent } from './_shared/add-category/add-category.component';
import { AssetsAssignedComponent } from './_shared/assets-assigned/assets-assigned.component';
import { AddEmployeeComponent } from './_shared/add-employee/add-employee.component';
import { AddInwardComponent } from './_shared/add-inward/add-inward.component';
import { AccessListComponent } from './_shared/access-list/access-list.component';
import { EditProductComponent } from './_shared/edit-product/edit-product.component';
import { EditCategoryComponent } from './_shared/edit-category/edit-category.component';
import { EditEmployeeComponent } from './_shared/edit-employee/edit-employee.component';
import { EditInwardComponent } from './_shared/edit-inward/edit-inward.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    NavBarComponent,
    CategoryComponent,
    ProductsComponent,
    EmployeeComponent,
    InwardComponent,
    ReportComponent,
    ExportComponent,
    GraphComponent,
    FilterComponent,
    CommonLookupComponent,
    SupplierComponent,
    DepartmentComponent,
    StatusComponent,
    ProductAssignedComponent,
    ModuleComponent,
    RolesComponent,
    PaginationComponent,
    AssetsAvailableComponent,
    AssetsOutofstockComponent,
    ChangePasswordComponent,
    AddProductComponent,
    AddCategoryComponent,
    AssetsAssignedComponent,
    AddEmployeeComponent,
    AddInwardComponent,
    AccessListComponent,
    EditProductComponent,
    EditCategoryComponent,
    EditEmployeeComponent,
    EditInwardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
