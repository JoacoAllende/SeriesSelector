import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class SorteoService {

  constructor(private http : HttpClient) {    
  }

  public getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(`http://localhost:3000/series`)
    .pipe()
  }
  
}
