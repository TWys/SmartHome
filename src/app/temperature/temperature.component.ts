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

  fShowInputBox () {
    document.getElementById('insert_setted_temp').style.display = 'block';
    document.getElementById('setted_temp').style.display = 'none';
  }

  fCloseInputBox() {
  document.getElementById('insert_setted_temp').style.display = 'none';
  document.getElementById('setted_temp').style.display = 'block';
  }

  fInsertTemperature(setted_temp_value){
    this.setted_temp = setted_temp_value;
    setTimeout(() => {
      //console.log(this.setted_temp);
      this.setted_temp = this.datasService.fSetTemperature(this.setted_temp);
      this.fCloseInputBox();
    }, 500);

  }

  fSetTemperature(x) {
    this.setted_temp=this.datasService.fSetTemperature(this.setted_temp, x);
    console.log("temperatura= "+this.setted_temp);
  }

  fGetActualTemperature() {
    this.actual_temp = this.datasService.fGetTemperature();
    //this.setted_temp = this.actual_temp;
    //if (this.actual_temp % 1 == 0) this.actual_temp = this.actual_temp + '.0';


    this.timer = setTimeout(() => {
      this.fGetActualTemperature();
    }, 5000);
  }

  ngOnInit() {
    this.fGetActualTemperature();
    this.setted_temp = this.actual_temp;
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

}
