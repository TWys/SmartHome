import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';


@Component({
  selector: 'app-navbar',
  providers: [ Auth ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../app.component.css','../../assets/bootstrap/css/bootstrap.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: Auth) {};

  ngOnInit() {
  }

}
