import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NhanvienComponent } from './components/nhanvien/nhanvien.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule, 
  NbIconModule, 
  NbSearchModule, 
  NbMenuModule, NbCardModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/theme/header/header.component';
import { FooterComponent } from './components/theme/footer/footer.component';
import { PhongbanComponent } from './components/phongban/phongban.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { FormsModule } from '@angular/forms';
import { LayoutService } from './components/services/layout.service';
import { PhongbanListComponent } from './components/phongban/phongban-list/phongban-list.component';
import { PhongbanFormComponent } from './components/phongban/phongban-form/phongban-form.component';
import { PhongbanService } from './components/services/phongban.service';
import { NhanvienAddComponent } from './components/nhanvien/nhanvien-add/nhanvien-add.component';
import { NhanvienListComponent } from './components/nhanvien/nhanvien-list/nhanvien-list.component';
import { NhanvienEditComponent } from './components/nhanvien/nhanvien-edit/nhanvien-edit.component';
import { NhanvienService } from './components/services/nhanvien.service';

@NgModule({
  declarations: [
    AppComponent,
    NhanvienComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PhongbanComponent,
    InvoiceComponent,
    PhongbanListComponent,
    PhongbanFormComponent,
    NhanvienAddComponent,
    NhanvienListComponent,
    NhanvienEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbIconModule,
    NbSearchModule
  ],
  providers: [LayoutService,PhongbanService,NhanvienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
