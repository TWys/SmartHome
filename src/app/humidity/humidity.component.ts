import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { Datas } from '../datas';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css','../../assets/bootstrap/css/bootstrap.css'],
  providers: [DatasService, Datas]
})
export class HumidityComponent implements OnInit {
  private actual_hum: number;
  private timer;
  private abs_hum: number;
  private B4: number = -25;
  private C2: number = 90;

  constructor(private datasService: DatasService) { }

  fGetActualHumidity () {
    this.actual_hum=this.datasService.fGetHumidity();
    this.abs_hum = ((0.000002*this.B4^4)+(0.0002*this.B4^3)+(0.0095*this.B4^2)+( 0.337*this.B4)+4.9034)*this.C2/1000;
    console.log(this.abs_hum);

    this.timer = setTimeout(() => {
      this.fGetActualHumidity();
    }, 5000);
  }

  ngOnInit() {
    this.fGetActualHumidity();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

}
