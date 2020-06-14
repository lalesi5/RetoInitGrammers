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

  constructor(
    private http: HttpClient
  ) {}


  ngOnInit(): void {
  this.llamarString(1);
  }

  // Llamada a la Api para obtener JSON de datos

  llamarString(id: number): void {

    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe((data: any) => {
        this.conversiones = data.results;
        this.rta = this.conversiones;
        this.picture = this.rta[0].image;
        this.nombre = this.rta[0].name;
        this.origin = this.rta[0].origin.name;
        this.species = this.rta[0].species;
        this.status = this.rta[0].status;
      });
  }
}
