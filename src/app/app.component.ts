import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Invoice';
  items :NbMenuItem[] = [
    {
      title: 'Trang chủ',
      icon: 'home-outline',
      link: 'dashboard',
    },
    {
      title: 'Quản lý nhân viên',
      icon: 'people-outline',
      link: 'nhanvien',
    },
    {
      title: 'Quản lý phòng ban',
      icon: { icon: 'people-outline', pack: 'eva' },
      link: 'phongban',
    },
    {
      title: 'Ghi chú',
      icon: { icon: 'file-text-outline', pack: 'eva' },
      link: 'invoice',
    },
   
  ];
}
