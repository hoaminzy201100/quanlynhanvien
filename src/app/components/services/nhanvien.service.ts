import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Nhanvien } from 'src/app/models/Nhanvien.model';

@Injectable({
  providedIn: 'root'
})
export class NhanvienService {
  public API: string = 'https://618636d0cd8530001765aa08.mockapi.io/tb_nhanvien';
  constructor(
    public http: HttpClient
  ) { }
  getAllNhanvien(): Observable<[Nhanvien]> {
    return this.http.get<[Nhanvien]>(this.API);
  }
  getFirstNhanvien(id: number): Observable<Nhanvien> {
    return this.http.get<Nhanvien>(`${this.API}/${id}`);
  }
  addNhanvien(nhanvien: Nhanvien): Observable<Nhanvien> {
    return this.http.post<Nhanvien>(this.API, nhanvien);
  }
  deleteNhanvien(id: number): Observable<Nhanvien> {
    return this.http.delete<Nhanvien>(`${this.API}/${id}`);
  }

  updateNhanvien(nhanvien: Nhanvien): Observable<Nhanvien> {
    return this.http.put<Nhanvien>(`${this.API}/${nhanvien.id}`, nhanvien);
  }

}
