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
  numero: number;

  constructor(
    private http: HttpClient
  ) {}


  ngOnInit(): void {
  this.llamarString(0);
  }

  // Llamada a la Api para obtener JSON de datos

  llamarString(id: number): void {

    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe((data: any) => {
        this.conversiones = data.results;
        this.picture = this.conversiones[id].image;
        this.nombre = this.conversiones[id].name;
        this.origin = this.conversiones[id].origin.name;
        this.species = this.conversiones[id].species;
        this.status = this.conversiones[id].status;
      });
    this.numero = id;
  }

  siguiente(): void{
    this.numero++;
    this.llamarString(this.numero);
  }
  anterior(): void{
    this.numero--;
    this.llamarString(this.numero);
  }
}
