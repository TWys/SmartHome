import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { Datas } from '../datas';
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

  fSetTemperature(x) {

  }

  fGetActualTemperature () {
    this.actual_temp=this.datasService.fGetTemperature();
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
