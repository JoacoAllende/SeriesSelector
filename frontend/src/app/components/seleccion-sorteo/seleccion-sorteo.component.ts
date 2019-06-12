import { Component, OnInit } from '@angular/core';
import { SorteoService } from 'src/app/services/sorteo.service';
import { Serie } from 'src/app/models/serie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seleccion-sorteo',
  templateUrl: './seleccion-sorteo.component.html',
  styleUrls: ['./seleccion-sorteo.component.css']
})
export class SeleccionSorteoComponent implements OnInit {

  public seriesObs: Observable<Serie[]>;
  public series: Serie[] = [];
  private probabilidades = 0;
  public ganador;
  private sorteoFinalizado = false;

  constructor(private sorteoService : SorteoService) { 
  }

  ngOnInit() {
    this.seriesObs = this.sorteoService.getSeries();
    this.seriesObs.forEach(element => {
      element.forEach(element => {
        this.probabilidades += element.puntaje;
        this.series.push(new Serie(element.id, element.nombre, element.puntaje, this.probabilidades));
      });
    })
    // this.seriesObs.subscribe(serie => this.series = serie);
  }

  compararSorteos (a, b) {
    return b.sorteos - a.sorteos;
  }

  compararProbabilidades (a, b) {
    return a.probabilidades - b.probabilidades;
  }

  sortear() {
    if (!this.sorteoFinalizado) {
      let sorteo = Math.floor((Math.random() * this.probabilidades));
      this.series.sort(this.compararProbabilidades);
      for (let i = 0; i < this.series.length; i++) {
        if (sorteo < this.series[i].probabilidades) {
          this.series[i].sorteos++;
          if (this.series[i].sorteos == 5)
            this.finalizarSorteo(this.series[i].nombre);
          break;
        }
      }
      this.series.sort(this.compararSorteos);
    }
  }

  finalizarSorteo(ganador) {
    this.ganador = ganador;
    this.sorteoFinalizado = true;
  }

}
