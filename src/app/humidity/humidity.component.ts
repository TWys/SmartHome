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

  constructor(private datasService: DatasService) { }

  fGetActualHumidity () {
    this.actual_hum=this.datasService.fGetHumidity();
    console.log(this.actual_hum);

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
