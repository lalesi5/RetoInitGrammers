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
  rta: any[];

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
      });
  }
}
