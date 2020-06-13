import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from 'protractor/built/taskScheduler';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private api = 'https://rickandmortyapi.com';


  constructor(
    private http: HttpClient
  ) { }


  getPersonages(){
    const path = `${this.api}/api/character/`;
    fetch(this.api)
      
      .then(function(response) {
        return response.json();
      });
  }

}

