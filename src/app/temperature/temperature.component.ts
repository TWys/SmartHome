import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { Temperatures } from '../temperatures';
//import { Http } from '@angular/http'
import {MockBackend} from "@angular/http/testing";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css','../../assets/bootstrap/css/bootstrap.css'],
  providers: [DatasService, Temperatures]
})
export class TemperatureComponent implements OnInit {
  private setted_temp: number;
  private actual_temp: any;

  constructor(private datasService: DatasService, private backend: MockBackend, private temperatures: Temperatures) {}

  // fSetTemperature(x) {
  //   if (x=='-') this.datasService.temperatures.requeted--;
  //   else if (x=='+') this.datasService.temperatures.requeted++;
  //   this.setted_temp=this.datasService.temperatures.requeted;
  //   console.log(this.setted_temp);
  // }

  fGetActualTemperature () {
    this.actual_temp=this.datasService.fGetTemperature();
    if (this.actual_temp%1 == 0) this.actual_temp = this.actual_temp+'.0';

    if (this.actual_temp < 18) document.getElementById('actual_temp').style.color="blue";
    else if (this.actual_temp > 26) document.getElementById('actual_temp').style.color="red";
    else document.getElementById('actual_temp').style.color="white";


    setTimeout(() => {
      this.fGetActualTemperature();
    }, 5000);
  }

  ngOnInit() {
    this.fGetActualTemperature();
    //this.setted_temp = this.actual_temp;
  }

}
