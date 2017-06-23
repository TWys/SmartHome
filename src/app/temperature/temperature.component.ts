import {Component, ElementRef, OnInit} from '@angular/core';
import {DatasService} from '../datas.service';
import {Datas} from '../datas';
import {MockBackend} from "@angular/http/testing";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css', '../../assets/bootstrap/css/bootstrap.css'],
  providers: [DatasService, Datas]
})
export class TemperatureComponent implements OnInit {
  private setted_temp: any;
  private actual_temp: any;
  private timer;

  constructor(private datasService: DatasService, private backend: MockBackend) {
  }

  fShowInputBox() {
    document.getElementById('insert_setted_temp').style.display = 'block';
    document.getElementById('setted_temp').style.display = 'none';
    document.getElementById('insert_setted_temp').focus();
  }

  fCloseInputBox() {
    document.getElementById('insert_setted_temp').style.display = 'none';
    document.getElementById('setted_temp').style.display = 'block';
  }

  fInsertTemperature(setted_temp_value) {
    if (isNaN(setted_temp_value)) this.fCloseInputBox();
    else if (!isNaN(setted_temp_value)) {
      this.setted_temp = this.datasService.fSetTemperature(setted_temp_value);
      this.fCloseInputBox();
    }
  }

  fSetTemperature(x?) {
    if (this.setted_temp < 18) this.setted_temp = 18;
    else if (this.setted_temp > 40) this.setted_temp = 40;
    else this.setted_temp = this.datasService.fSetTemperature(this.setted_temp, x);
  }

  fGetTemperatures() {
    this.actual_temp = this.datasService.fGetTemperature();
    this.setted_temp = this.datasService.fSetTemperature();
    //this.setted_temp = this.actual_temp;
    //if (this.actual_temp % 1 == 0) this.actual_temp = this.actual_temp + '.0';


    this.timer = setTimeout(() => {
      this.fGetTemperatures();
    }, 5000);
  }

  ngOnInit() {
    this.fGetTemperatures();
    this.datasService.fSetTemperature();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

}
