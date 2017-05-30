import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { Datas } from '../datas';
//import { Http } from '@angular/http'
import {MockBackend} from "@angular/http/testing";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css','../../assets/bootstrap/css/bootstrap.css'],
  providers: [DatasService, Datas]
})
export class TemperatureComponent implements OnInit {
  private setted_temp: number;
  private actual_temp: any;
  private timer;

  constructor(private datasService: DatasService, private backend: MockBackend) {}

  // fSetTemperature(x) {
  //   if (x=='-') this.datasService.temperatures.requeted_temp--;
  //   else if (x=='+') this.datasService.temperatures.requeted_temp++;
  //   this.setted_temp=this.datasService.temperatures.requeted_temp;
  //   console.log(this.setted_temp);
  // }

  fGetActualTemperature () {
    this.actual_temp=this.datasService.fGetTemperature();
    // if (this.actual_temp < 18) document.getElementById('actual_temp').style.color="blue";
    // else if (this.actual_temp > 26) document.getElementById('actual_temp').style.color="red";
    // else document.getElementById('actual_temp').style.color="white";
    if (this.actual_temp%1 == 0) this.actual_temp = this.actual_temp+'.0';


    this.timer=setTimeout(() => {
      this.fGetActualTemperature();
    }, 5000);
  }

  ngOnInit() {
    this.fGetActualTemperature();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

}
