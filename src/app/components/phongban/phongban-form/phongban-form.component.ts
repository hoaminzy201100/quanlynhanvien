import { Component, OnInit } from '@angular/core';
import { PhongbanService } from '../../services/phongban.service';
import { Subscription } from 'rxjs';
import { Phongban } from 'src/app/models/Phongban.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phongban-form',
  templateUrl: './phongban-form.component.html',
  styleUrls: ['./phongban-form.component.scss']
})
export class PhongbanFormComponent implements OnInit {
  currentPhongban: Phongban = new Phongban();
  subscription: Subscription;
  subscriptionParams: Subscription;
  public phongbanModelId = 0;
  public formTitle;
  constructor(
    private phongbanService: PhongbanService,
    private routerService: Router,
    private activeRouteService: ActivatedRoute) { }
  ngOnInit() {
    this.loadData();
  }


  loadData() {
    this.subscriptionParams = this.activeRouteService.paramMap.subscribe(params => {
      let id = params.get("id");
      this.phongbanModelId = Number(id);
      this.subscription = this.phongbanService.getById(this.phongbanModelId).subscribe((data: Phongban) => {
        this.currentPhongban = data;
      });
    });
  }

  
  onAdd() {
  this.subscription = this.phongbanService.addNew(this.currentPhongban).subscribe(data => {
    this.routerService.navigateByUrl('phongban');
  })
  }

  Onsubmit() {
    if (!this.phongbanModelId || this.phongbanModelId === 0) {
      this.onAdd();
    }
    else {
      this.onUpdate();
    }
  }
  

  onUpdate() {
  this.subscription = this.phongbanService.updateById(this.phongbanModelId, this.currentPhongban).subscribe((data: Phongban) => {
    this.routerService.navigateByUrl('phongban');
  })
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