import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Datas} from "./datas";
import {Http, Headers, BaseRequestOptions, Response, ResponseOptions, RequestMethod, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

@Injectable()
export class DatasService {

  public response = '{"temperature": [{"actual": 25,"requested": 26}, {"actual": 24.5,"requested": 24}, {"actual": 18.9,"requested": 24},{"actual": 17.5,"requested": 24}, {"actual": 28.4,"requested": 24}, {"actual": 30.0,"requested": 24}, {"actual": 21.8,"requested": 24}, {"actual": 16.9,"requested": 24},{"actual": 27.1,"requested": 24}, {"actual": 16,"requested": 24}],"pressure": [{"actual": 60}, {"actual": 55}, {"actual": 57}, {"actual": 51}, {"actual": 48}]}';

  TABLE_A_URL: string = 'http://api.nbp.pl/api/cenyzlota/2017-06-06?format=json';
  // TABLE_A_URL: string = 'http://jsonplaceholder.typicode.com/posts';
  // TABLE_A_URL: string = 'http://www.smhome.pl';
  private wartosc;


  constructor(public datas: Datas, private http: Http) {
  }

  fSetTemperature(value: number, sign?: string) {
    this.datas.requeted_temp = value;
    if (sign == '+') this.datas.requeted_temp++;
    else if (sign == '-') this.datas.requeted_temp--;

    if (this.datas.requeted_temp < 18) this.datas.requeted_temp = 18;
    else if (this.datas.requeted_temp > 40) this.datas.requeted_temp = 40;

    this.fHttpTest('temp', this.datas.requeted_temp);
    return this.datas.requeted_temp;
  }


  fGetTemperature() {
    var x: number = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    this.datas.actual_temp = JSON.parse(this.response).temperature[x].actual;
    this.fHttpTest('temp');
    return this.datas.actual_temp;
  }

  fHttpTest(name?: string, value?: number) {
    console.log ('warosci parametrów: '+name+', '+value);
    // let username: string = 'serwer1734514';
    // let password: string = 'Projekt2017';

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // let dane = 'rolUp=' +1;

    // return this.http.post(this.TABLE_A_URL, {title: 'foo', body: 'bar', userId: 1})
    this.http.get(this.TABLE_A_URL)
      .map(res => res.json())
      // .subscribe(data => console.log(data));
     .subscribe (data => this.datas.actual_temp = data[0].cena);
    //return this.datas.actual_temp;
  }

  fGetPressure() {
    var x: number = Math.floor(Math.random() * (4 - 0 + 1) + 0);
    this.datas.pressure = JSON.parse(this.response).pressure[x].actual;
    this.fHttpTest('cisnienie');
    return this.datas.pressure;
  }

  fGetLightStatus(x) {
    this.fHttpTest('swiatlo');
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
    this.fHttpTest('rolUp', x);
    if (x == 0) return "../../assets/img/gif/blinds_down.gif";
    else if (x == 1) return "../../assets/img/gif/blinds_up.gif";
  }
}
