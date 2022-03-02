import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NhanvienComponent } from './components/nhanvien/nhanvien.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PhongbanComponent } from './components/phongban/phongban.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PhongbanListComponent } from './components/phongban/phongban-list/phongban-list.component';
import { PhongbanFormComponent } from './components/phongban/phongban-form/phongban-form.component';
import { NhanvienListComponent } from './components/nhanvien/nhanvien-list/nhanvien-list.component';
import { NhanvienEditComponent } from './components/nhanvien/nhanvien-edit/nhanvien-edit.component';
import { NhanvienAddComponent } from './components/nhanvien/nhanvien-add/nhanvien-add.component';


const routes: Routes = [
  {
    path: 'nhanvien',
    component: NhanvienComponent,
    children : [
      {
        path: '',
        component: NhanvienListComponent
      },
      {
        path: 'list',
        component: NhanvienListComponent
      },
      {
        path: 'edit/:id',
        component: NhanvienEditComponent
      },
      {
        path: 'add',
        component: NhanvienAddComponent
      }
    ]
  },
  {
    path: 'phongban',
    component: PhongbanComponent,
    children: [
      {
        path: '',
        component: PhongbanListComponent
      },
      {
        path: ':id/edit',
        component: PhongbanFormComponent
      },
      {
        path: 'add',
        component: PhongbanFormComponent
      },
    ]
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
