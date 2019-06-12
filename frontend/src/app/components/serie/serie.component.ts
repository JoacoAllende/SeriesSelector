import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../services/serie.service';
import { NgForm } from '@angular/forms';
import { Serie } from 'src/app/models/serie';
import {RouterModule} from '@angular/router';
    

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})

export class SerieComponent implements OnInit {

  constructor(private serieService : SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(){
    this.serieService.getSeries()
      .subscribe(res => {
        this.serieService.series = res as Serie[]; 
      })
  }

  editSerie(serie: Serie){
    this.serieService.selectedSerie = new Serie(serie.id, serie.nombre, serie.puntaje);
  }

  addSerie(form : NgForm){
    if (form.value.puntaje > 6)
      form.value.puntaje = 6;
    if (form.value.id == -1){
      this.serieService.postSerie(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getSeries();
      })
    }
    else {
      this.serieService.putSerie(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getSeries();
      })
    }
  }

  deleteSerie(id : number){
    if (confirm('Desea eliminar la serie?')){
      this.serieService.deleteSerie(id)
      .subscribe(res => {
        this.getSeries();
      })
    }
  }
  
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.serieService.selectedSerie = new Serie();
    }
  }
}
