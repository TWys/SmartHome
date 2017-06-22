import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Datas} from "./datas";
import {Http, Headers, BaseRequestOptions, Response, ResponseOptions, RequestMethod, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

@Injectable()
export class DatasService {

  public response = '{"temperature": [{"actual": 25,"requested": 26}, {"actual": 24.5,"requested": 24}, {"actual": 18.9,"requested": 24},{"actual": 17.5,"requested": 24}, {"actual": 28.4,"requested": 24}, {"actual": 30.0,"requested": 24}, {"actual": 21.8,"requested": 24}, {"actual": 16.9,"requested": 24},{"actual": 27.1,"requested": 24}, {"actual": 16,"requested": 24}],"pressure": [{"actual": 60}, {"actual": 55}, {"actual": 57}, {"actual": 51}, {"actual": 48}]}';

  API_URL: string = 'http://www.smhome.pl/skrypt.php';

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

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    let body = 'temp=' + 24;

    this.http.post(this.API_URL, body, options)
      .map(res => res.json())
      .subscribe (data => {
       this.datas.pressure = data.cisnienie_atm;
       this.datas.light_status = data.swiatlo;
       this.datas.actual_temp = data.akt_temp;
       this.datas.requeted_temp = data.temp_ust;
       // this.datas.blinds_status = data.rolety_Up(1)_Down(0);
     });
  }

  fGetPressure() {
    this.fHttpTest();
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
