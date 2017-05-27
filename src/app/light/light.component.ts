import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { Temperatures } from '../temperatures';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css','../../assets/bootstrap/css/bootstrap.css'],
  providers: [DatasService, Temperatures]

})
export class LightComponent implements OnInit {

  constructor(private datasService: DatasService) { }

  public switcher_status = 0;

  fswitch(x) {
    this.switcher_status = this.datasService.fGetLightStatus(x);
    // if (x==this.switcher_status) return;
    // if (x==0) {
    //   this.switcher_status = 0;
    //   document.getElementById('bulb').style.fill = 'black';
    // }
    // else if (x==1) {
    //   this.switcher_status = 1;
    //   document.getElementById('bulb').style.fill = 'yellow';
    // }
    // console.log(this.switcher_status)
  }

  ngOnInit() {
  }

}
