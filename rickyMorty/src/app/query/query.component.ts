import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  conversiones: any;
  nombre: string;
  origin: string;
  species: string;
  status: string;
  picture: any;
  rta: any[];
  inicio = 0;

  constructor(
    private http: HttpClient
  ) {}


  ngOnInit(): void {
  this.llamarString();
  }

  // Llamada a la Api para obtener JSON de datos

  llamarString(): void {

    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe((data: any) => {
        this.conversiones = data.results;
        this.rta = this.conversiones;
        this.picture = this.rta[this.inicio].image;
        this.nombre = this.rta[this.inicio].name;
        this.origin = this.rta[this.inicio].origin.name;
        this.species = this.rta[this.inicio].species;
        this.status = this.rta[this.inicio].status;
      });
  }

  llamarStringAnterior(): void {

    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe((data: any) => {
        this.conversiones = data.results;
        this.rta = this.conversiones;
        this.picture = this.rta[--this.inicio].image;
        this.nombre = this.rta[--this.inicio].name;
        this.origin = this.rta[--this.inicio].origin.name;
        this.species = this.rta[--this.inicio].species;
        this.status = this.rta[--this.inicio].status;
      });
  }

  llamarStringSiguiente(): void {

    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe((data: any) => {
        this.conversiones = data.results;
        this.rta = this.conversiones;
        this.picture = this.rta[--this.inicio].image;
        this.nombre = this.rta[--this.inicio].name;
        this.origin = this.rta[--this.inicio].origin.name;
        this.species = this.rta[--this.inicio].species;
        this.status = this.rta[--this.inicio].status;
      });
  }
}
