import {Component, OnInit} from '@angular/core';
import {DatasService} from '../datas.service';
import {Datas} from '../datas';
import get = Reflect.get;

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
    if (this.blinds_status == x) return;
    else {
      this.imgSRC = this.datasService.fSetBlinds(x);
      this.blinds_status = x;
    }
  }

  ngOnInit() {
  }

}
