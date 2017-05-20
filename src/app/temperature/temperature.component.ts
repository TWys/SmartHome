import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css','../../assets/bootstrap/css/bootstrap.css']
})
export class TemperatureComponent implements OnInit {

  constructor() { }

  public setTemperature = 20;
  // temperature.value = this.setTemperature;

  fSetTemperature(x) {
    if (x==0) this.setTemperature--;
    else if (x==1) this.setTemperature++;
  }

  ngOnInit() {
  }

}
