import {Component} from '@angular/core';
import {Auth} from '../auth.service';


@Component({
  selector: 'app-login',
  template: ``
})
export class LoginComponent {
  constructor(private auth: Auth) {
  }
}
