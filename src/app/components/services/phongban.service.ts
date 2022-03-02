import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Phongban } from 'src/app/models/Phongban.model';

@Injectable()
export class PhongbanService {
    Api = "https://618636d0cd8530001765aa08.mockapi.io/tb_phongban";
    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<Phongban[]> {
        return this.http.get<Phongban[]>(this.Api);
    }

    getById(id: number): Observable<any> {
        return this.http.get(`${this.Api}/${id}`); 
    }

    updateById(id: number, phongban: Phongban): Observable<Phongban> {
        return this.http.put<Phongban>(`${this.Api}/${id}`, Phongban);
    }

    deleteById(id: number): Observable<Phongban> {
        return this.http.delete<Phongban>(`${this.Api}/${id}`);
    }

    
    addNew(phongban: Phongban): Observable<Phongban> {
        return this.http.post<Phongban>(this.Api, phongban);
    }
}