import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienAddComponent } from './nhanvien-add.component';

describe('NhanvienAddComponent', () => {
  let component: NhanvienAddComponent;
  let fixture: ComponentFixture<NhanvienAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanvienAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
