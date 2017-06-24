import {Component, OnInit} from '@angular/core';
import {DatasService} from '../datas.service';
import {Datas} from '../datas';
import get = Reflect.get;
import {setTimeout} from "timers";

@Component({
  selector: 'app-blinds',
  templateUrl: './blinds.component.html',
  styleUrls: ['./blinds.component.css', '../../assets/bootstrap/css/bootstrap.css', '../../assets/font-awesome/css/font-awesome.css'],
  providers: [DatasService, Datas]
})
export class BlindsComponent implements OnInit {

  constructor(private datasService: DatasService) {
  }

  private blinds_status = 0;
  private imgSRC = "../../assets/img/blinds_closed.png";

  fSetBlinds(x) {
    if (this.datasService.datas.blinds_status == x) return;
    else {
      this.imgSRC = this.datasService.fSetBlinds(x);
    }
  }

  ngOnInit() {
    // this.imgSRC = "../../assets/img/blinds_closed.png";
    this.datasService.fHttpConnection();
    setTimeout (() => {
      this.imgSRC = this.datasService.fGetBlindStatus();
      this.blinds_status = this.datasService.datas.blinds_status;
    }, 500);
  }

}
