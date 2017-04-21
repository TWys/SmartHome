import { Component } from '@angular/core';
import { Auth } from './auth.service';

@Component({
  selector: 'app-root',
  providers: [ Auth ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/bootstrap/css/bootstrap.css']
})
export class AppComponent {
  constructor(private auth: Auth) {};
  slogan = "be smart like your home!";
  checkOffer = "Sprawdź naszą ofertę!";
}

