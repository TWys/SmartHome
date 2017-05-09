import {Component} from '@angular/core';
import {TranslateService} from '../translate'

import {NavbarComponent} from '../navbar/navbar.component'
@Component({
  selector: 'app-home',
  providers: [ TranslateService, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/bootstrap/css/bootstrap.css', '../app.component.css']
})
export class HomeComponent {
  slogan = "be smart like your home!";
  // checkOffer = "Sprawdź naszą ofertę!"
}
