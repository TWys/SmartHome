import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Datas} from "./datas";
import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  RequestMethod,
  XHRBackend,
  RequestOptions
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

@Injectable()
export class DatasService {

  public response = '{"temperature": [{"actual": 25,"requested": 26}, {"actual": 24.5,"requested": 24}, {"actual": 18.9,"requested": 24},{"actual": 17.5,"requested": 24}, {"actual": 28.4,"requested": 24}, {"actual": 30.0,"requested": 24}, {"actual": 21.8,"requested": 24}, {"actual": 16.9,"requested": 24},{"actual": 27.1,"requested": 24}, {"actual": 16,"requested": 24}],"humidity": [{"actual": 60}, {"actual": 55}, {"actual": 57}, {"actual": 51}, {"actual": 48}]}';


  constructor(public datas: Datas) {
  }


  fSetTemperature(value) {

  }


  fGetTemperature() {
    var x: number = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    this.datas.actual_temp = JSON.parse(this.response).temperature[x].actual;
    return this.datas.actual_temp;
  }

  fGetHumidity() {
    var x: number = Math.floor(Math.random() * (4 - 0 + 1) + 0);
    this.datas.humidity = JSON.parse(this.response).humidity[x].actual;
    return this.datas.humidity;
  }

  fGetLightStatus(x) {
    if (x == 0) {
      document.getElementById('bulb').style.fill = 'black';
      return 0;
    }
    else if (x == 1) {
      document.getElementById('bulb').style.fill = 'yellow';
      return 1;
    }
  }

  fSetBlinds(x) {
    if (x == 0) return "../../assets/img/gif/blinds_down.gif";
    else if (x == 1) return "../../assets/img/gif/blinds_up.gif";
  }
}
