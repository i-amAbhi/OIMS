import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsAvailableComponent } from './Components/assets-available/assets-available.component';
import { AssetsOutofstockComponent } from './Components/assets-outofstock/assets-outofstock.component';
import { CategoryComponent } from './Components/category/category.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { InwardComponent } from './Components/inward/inward.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { ProductsComponent } from './Components/products/products.component';
import { ReportComponent } from './Components/report/report.component';
import { CommonLookupComponent } from './System/common-lookup/common-lookup.component';
import { DepartmentComponent } from './System/department/department.component';
import { ModuleComponent } from './System/module/module.component';
import { ProductAssignedComponent } from './System/product-assigned/product-assigned.component';
import { RolesComponent } from './System/roles/roles.component';
import { StatusComponent } from './System/status/status.component';
import { SupplierComponent } from './System/supplier/supplier.component';
import { AccessListComponent } from './_shared/access-list/access-list.component';
import { AddCategoryComponent } from './_shared/add-category/add-category.component';
import { AddEmployeeComponent } from './_shared/add-employee/add-employee.component';
import { AddInwardComponent } from './_shared/add-inward/add-inward.component';
import { AddProductComponent } from './_shared/add-product/add-product.component';
import { AssetsAssignedComponent } from './_shared/assets-assigned/assets-assigned.component';
import { ChangePasswordComponent } from './_shared/change-password/change-password.component';
import { EditCategoryComponent } from './_shared/edit-category/edit-category.component';
import { EditEmployeeComponent } from './_shared/edit-employee/edit-employee.component';
import { EditInwardComponent } from './_shared/edit-inward/edit-inward.component';
import { EditProductComponent } from './_shared/edit-product/edit-product.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "category", component: CategoryComponent },
  { path: "products", component: ProductsComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "inward", component: InwardComponent },
  { path: "report", component: ReportComponent },
  { path: "commonLookup", component: CommonLookupComponent },
  { path: "supplier", component: SupplierComponent },
  { path: "dept", component: DepartmentComponent },
  { path: "status", component: StatusComponent },
  { path: "productsAssigned", component: ProductAssignedComponent },
  { path: "module", component: ModuleComponent },
  { path: "roles", component: RolesComponent },
  { path: "assetsAvailable", component: AssetsAvailableComponent },
  { path: "assetsAssigned", component: AssetsAssignedComponent },
  { path: "changePassword", component: ChangePasswordComponent },
  { path: "addCategory", component: AddCategoryComponent },
  { path: "addProduct", component: AddProductComponent },
  { path: "assetsOutofstock", component: AssetsOutofstockComponent },
  { path: "addEmployee", component: AddEmployeeComponent },
  { path: "addInward", component: AddInwardComponent },
  { path: "assignRoles", component: AccessListComponent },
  {path: "editProduct", component:EditProductComponent},
  {path: "editCategory", component:EditCategoryComponent},
  {path: "editEmployee", component:EditEmployeeComponent},
  {path: "editInward", component:EditInwardComponent},
  { path: "", component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
