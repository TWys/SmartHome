import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css','../../assets/bootstrap/css/bootstrap.css']
})
export class LightComponent implements OnInit {

  constructor() { }

  public switcher_status = 0;

  fswitch(x) {
    if (x==this.switcher_status) return;
    if (x==0) {
      this.switcher_status = 0;
      document.getElementById('bulb').style.fill = 'black';
    }
    else if (x==1) {
      this.switcher_status = 1;
      document.getElementById('bulb').style.fill = 'yellow';
    }
    console.log(this.switcher_status)
  }

  ngOnInit() {
  }

}