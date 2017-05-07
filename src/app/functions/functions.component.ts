import { Component, OnInit } from '@angular/core';
import {Auth} from "../auth.service";

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css','../../assets/bootstrap/css/bootstrap.css']
})
export class FunctionsComponent implements OnInit {
  constructor(private auth: Auth) {}

  title= 'Smart Home';

  public clock() {
    let date= new Date();
    let hour= date.getHours().toString();
    if (hour.charAt(1)=='') hour='0'+hour;
    let minute= date.getMinutes().toString();
    if (minute.charAt(1)=='') minute='0'+minute;
    let second= date.getSeconds().toString();
    if (second.charAt(1)=='') second='0'+second;
    //if (second <10) second='0'+second.toString();

    let year= date.getFullYear().toString();
    let month= (date.getMonth()+1).toString();
    if (month.charAt(1)=='') month='0'+month;
    let day= date.getDate().toString();
    if (day.charAt(1)=='') day='0'+day;

    //var today= year+'-'+month+'-'+day+'  '+hour+':'+minute+':'+second;
    document.getElementById('calendar').innerHTML= year+"-"+month+"-"+day+" <span class='clock'>"+hour+":"+minute+":"+second+"</span>";

    setTimeout(() => {
      this.clock();
    }, 1000);


  }


  public ngOnInit(): any
  {
    this.clock();
  }

}
