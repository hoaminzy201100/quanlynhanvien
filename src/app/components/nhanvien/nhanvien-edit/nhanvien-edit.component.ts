import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Nhanvien } from 'src/app/models/Nhanvien.model';
import { NhanvienService } from '../../services/nhanvien.service';

@Component({
  selector: 'app-nhanvien-edit',
  templateUrl: './nhanvien-edit.component.html',
  styleUrls: ['./nhanvien-edit.component.scss']
})
export class NhanvienEditComponent implements OnInit, OnDestroy {

  public nhanvien: Nhanvien;
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  constructor(
    public nhanvienService: NhanvienService,
    public routerService: Router,
    public activetedRouterService: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.nhanvien = new Nhanvien();
    this.loaddata();

  }
  loaddata() {
    this.subscriptionParams = this.activetedRouterService.params.subscribe((data: Params) => {
      let id = data[`id`];
      this.subscription = this.nhanvienService.getFirstNhanvien(id).subscribe((nhanvien: Nhanvien) => {
        this.nhanvien = nhanvien;
      });
    });
  }
  onUpdateNhanvien() {
    this.subscription = this.nhanvienService.updateNhanvien(this.nhanvien).subscribe((data: Nhanvien) => {
      this.routerService.navigate(['nhanvien']);
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

}
