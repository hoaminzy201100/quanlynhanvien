import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Phongban } from 'src/app/models/Phongban.model';
import { PhongbanService } from '../../services/phongban.service';

@Component({
  selector: 'app-phongban-list',
  templateUrl: './phongban-list.component.html',
  styleUrls: ['./phongban-list.component.scss']
})
export class PhongbanListComponent implements OnInit {
  public subscription: Subscription;
  phongbans: Phongban[];
  constructor(
    public phongbanService: PhongbanService
  ) { }
  ngOnInit() {
    this.subscription = this.phongbanService.getAll().subscribe(data => {
      console.log(data);
      this.phongbans = data;
    });
  }
  onDelete(id: number) { this.subscription = this.phongbanService.deleteById(id).subscribe((data: Phongban) => { this.updateAfterDelete(id); }); }
  updateAfterDelete(id: number) {
    for (let i = 0; i < this.phongbans.length; i++) {
      if (this.phongbans[i].id == id) {
        this.phongbans.slice(i, 1);
        break;
      }
    }
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}