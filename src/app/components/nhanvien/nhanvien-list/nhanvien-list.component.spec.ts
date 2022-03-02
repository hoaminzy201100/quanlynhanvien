import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienListComponent } from './nhanvien-list.component';

describe('NhanvienListComponent', () => {
  let component: NhanvienListComponent;
  let fixture: ComponentFixture<NhanvienListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanvienListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
