import {Component, OnDestroy, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { Nhanvien } from 'src/app/models/Nhanvien.model';
import { NhanvienService } from '../../services/nhanvien.service';


@Component({
  selector: 'app-nhanvien-add',
  templateUrl: './nhanvien-add.component.html',
  styleUrls: ['./nhanvien-add.component.scss']
})
export class NhanvienAddComponent implements OnInit, OnDestroy {

  public nhanvien: Nhanvien;
  public subscription: Subscription;

  constructor(
    public NhanvienService: NhanvienService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.nhanvien = new Nhanvien();
  }

  onAddNhanvien() {
    this.subscription = this.NhanvienService.addNhanvien(this.nhanvien).subscribe(data => {
      if (data && data.id) {
        this.routerService.navigate(['nhanvien']);
      }
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
