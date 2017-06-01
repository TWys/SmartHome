import {Component} from '@angular/core';

import {NavbarComponent} from '../navbar/navbar.component'
@Component({
  selector: 'app-home',
  providers: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/bootstrap/css/bootstrap.css', '../app.component.css']
})
export class HomeComponent {
}
