import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Datas} from "./datas";
import {Http, Headers, BaseRequestOptions, Response, ResponseOptions, RequestMethod, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class DatasService {

  API_URL: string = 'http://www.smhome.pl/skrypt.php';

  constructor(public datas: Datas, private http: Http) {
  }

  fHttpConnection(name?: string, value?: number) {
    console.log ('warosci parametrów: '+name+', '+value);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    let body = null;
    if (name != null && value!= null)  {
      body = name + '=' + value;
    }

    this.http.post(this.API_URL, body, options)
      .map(res => res.json())
      .subscribe (data => {
        this.datas.pressure = data.cisnienie_atm;
        this.datas.light_status = parseInt(data.swiatlo_On_1_Off_0);
        this.datas.actual_temp = parseInt(data.temp_akt);
        this.datas.requeted_temp = parseInt(data.temp_ust);
        this.datas.blinds_status = parseInt(data.rolety_Up_1_Down_0);
        console.log(data);
      });
  }

  fSetTemperature(value?: number, sign?: string) {
    if(value == null) {
      this.fHttpConnection();
      return this.datas.requeted_temp;
    }
    else {
      this.datas.requeted_temp = value;
      if (sign == '+') this.datas.requeted_temp++;
      else if (sign == '-') this.datas.requeted_temp--;

      if (this.datas.requeted_temp < 18) this.datas.requeted_temp = 18;
      else if (this.datas.requeted_temp > 40) this.datas.requeted_temp = 40;

      this.fHttpConnection('temp', this.datas.requeted_temp);
      return this.datas.requeted_temp;
    }
  }


  fGetTemperature() {
    this.fHttpConnection();
    console.log(this.datas.actual_temp);
    return this.datas.actual_temp;
  }


  fGetPressure() {
    this.fHttpConnection();
    return this.datas.pressure;
  }

  fGetLightStatus() {
    this.fHttpConnection();
      // .then(this.response);
    setTimeout(() => {
      if (this.datas.light_status == 0) {
        document.getElementById('bulb').style.fill = 'black';
        document.getElementById('switcher_on').style.display = 'block';
        document.getElementById('switcher_off').style.display = 'none';
        return 0;
      }
      else if (this.datas.light_status == 1) {
        document.getElementById('bulb').style.fill = 'yellow';
        document.getElementById('switcher_off').style.display = 'block';
        document.getElementById('switcher_on').style.display = 'none';
        return 1;
      }
      else console.log('NIC');}, 500);
    this.fSetLightStatus();

  }

  fSetLightStatus(x?: number) {
    this.fHttpConnection('light', x);
    setTimeout(() => {
      if (this.datas.light_status == 0) {
        document.getElementById('bulb').style.fill = 'black';
        document.getElementById('switcher_on').style.display = 'block';
        document.getElementById('switcher_off').style.display = 'none';

        //return 0;
      }
      else if (this.datas.light_status == 1) {
        document.getElementById('bulb').style.fill = 'yellow';
        document.getElementById('switcher_off').style.display = 'block';
        document.getElementById('switcher_on').style.display = 'none';
        //return 1;
      };
      return this.datas.light_status;}, 500);
    console.log(this.datas.light_status);
    return x;

    // if (this.datas.light_status == 0) {
    //   document.getElementById('bulb').style.fill = 'black';
    //   return 0;
    // }
    // else if (this.datas.light_status == 0) {
    //   document.getElementById('bulb').style.fill = 'yellow';
    //   return 1;
    // }
  }

  fSetBlinds(x) {
    this.fHttpConnection('rolUp', x);
    if (x == 0) return "../../assets/img/gif/blinds_down.gif";
    else if (x == 1) return "../../assets/img/gif/blinds_up.gif";
  }
}
