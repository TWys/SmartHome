import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Temperatures} from "./temperatures";
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

@Injectable()
export class DatasService {

  public response = '{"temperature":[{"actual":25,"requested":26},{"actual":24.5,"requested":24},{"actual":18.9,"requested":24},{"actual":17.5,"requested":24},{"actual":28.4,"requested":24},{"actual":30.0,"requested":24},{"actual":21.8,"requested":24},{"actual":16.9,"requested":24},{"actual":27.1,"requested":24},{"actual":16,"requested":24}],"light":[{"status":0},{"status":1}]}';

  // public tempe = {
  //   value: 25.0,
  //   setted: 20.0
  // };

  constructor(public temperatures: Temperatures) { }


  fSetTemperature(value) {

  }


  fGetTemperature() {
    var x: number = Math.floor(Math.random()*(9-0+1)+0);
    // console.log(JSON.parse(this.response).temperature[x].actual);
    // console.log(x);
    this.temperatures.value = JSON.parse(this.response).temperature[x].actual;
    return this.temperatures.value;
  }
}
