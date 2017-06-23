import {Component, OnInit} from '@angular/core';
import {DatasService} from '../datas.service';
import {Datas} from '../datas';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css', '../../assets/bootstrap/css/bootstrap.css'],
  providers: [DatasService, Datas]

})
export class LightComponent implements OnInit {

  constructor(private datasService: DatasService) {
  }

  //public switcher_status = 0;

  fswitch(x?: number) {
    this.datasService.fSetLight(x);
  }

  ngOnInit() {
    this.datasService.fSetLight();
  }

}
