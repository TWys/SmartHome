import {Component, OnInit} from '@angular/core';
import {DatasService} from '../datas.service';
import {Datas} from '../datas';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.css', '../../assets/bootstrap/css/bootstrap.css'],
  providers: [DatasService, Datas]
})
export class PressureComponent implements OnInit {
  private actual_pres: any;
  private timer;

  constructor(private datasService: DatasService) {
  }

  fGetActualPressure() {
    this.actual_pres = this.datasService.fGetPressure();

    this.timer = setTimeout(() => {
      this.fGetActualPressure();
    }, 5000);
  }

  ngOnInit() {
    this.actual_pres = this.datasService.datas.pressure;
    this.fGetActualPressure();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

}
