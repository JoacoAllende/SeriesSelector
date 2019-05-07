import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  series : Serie[];
  selectedSerie : Serie;

  constructor(private http : HttpClient) {
    this.series = [];
    this.selectedSerie = new Serie;
   }

   postSerie(serie : Serie){
    return this.http.post(`http://localhost:3000/series`,serie);
   }

   putSerie(serie : Serie){
    return this.http.put(`http://localhost:3000/series`,serie);
   }

   getSeries(){
    return this.http.get(`http://localhost:3000/series`);
   }

   deleteSerie(id: number){
     return this.http.delete(`http://localhost:3000/series` + id);
   }
}
