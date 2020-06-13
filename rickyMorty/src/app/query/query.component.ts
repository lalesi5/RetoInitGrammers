import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  conversiones: any;
  rta: [];

  constructor(
    private http: HttpClient
  ) {}


  ngOnInit(): void {
  this.http.get('https://rickandmortyapi.com/api/character/')
    .subscribe(data => {
      this.conversiones = data;
      this.rta = this.conversiones;

      console.log('Esta corriendo la query', this.rta);
    });

  }

}
