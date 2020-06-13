import { Component, OnInit } from '@angular/core';
import { JsonService} from '../json.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(
    private json: JsonService
  ) {}


  getNombrePersonaje(){
    this.json.getPersonages();
  }



  ngOnInit(): void {
  }

}
