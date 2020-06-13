import { Component, OnInit } from '@angular/core';
import { JsonService} from '../json.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(public json: JsonService) {
    this.json.getJson('https://rickandmortyapi.com/api/character/').subscribe((res: any) => {
      console.log(res);
    });
  }
  ngOnInit(): void {
  }

}
