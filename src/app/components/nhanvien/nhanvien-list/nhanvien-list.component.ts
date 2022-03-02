import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { Nhanvien } from 'src/app/models/Nhanvien.model';
import { NhanvienService } from '../../services/nhanvien.service';

@Component({
  selector: 'app-nhanvien-list',
  templateUrl: './nhanvien-list.component.html',
  styleUrls: ['./nhanvien-list.component.scss']
})
export class NhanvienListComponent implements OnInit, OnDestroy {

  public subcription: Subscription;

  public nhanvien: Nhanvien[] = [];
  public nhanvienLast: Nhanvien[] = [];

  constructor(
    public nhanvienService: NhanvienService
  ) {
  }

  ngOnInit(): void {
    this.loaddata();

  }
  loaddata() {
    this.subcription = this.subcription = this.nhanvienService.getAllNhanvien().subscribe(data => {
        this.nhanvien = data;

      }, error => {
        console.log(error);
      }
    );
  }
  onDeleteNhanvien(id: number) {
    this.subcription = this.nhanvienService.deleteNhanvien(id).subscribe(data => {
      this.updateDataAfterDelete(id);
    });
  }
  updateDataAfterDelete(id: number) {
    for (var i = 0; i < this.nhanvien.length; i++) {
      if (this.nhanvien[i].id === id) {
        this.nhanvien.splice(i, 1);
        break;
      }
    }
  }
  ngOnDestroy(): void {

  }
}
