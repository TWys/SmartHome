import {Component, OnInit} from '@angular/core';
import {Auth} from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  providers: [Auth],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/bootstrap/css/bootstrap.css']
})
export class AppComponent implements OnInit {

  constructor( ) {
  };

  ngOnInit() {
  }
}

this.onload = setCookie();

function setCookie() {
  if (document.cookie !== "") {
    console.log("Ciasteczko istnieje!");
  }
  else {
    var container = document.createElement('div'),
      close = document.createElement('button'),
      style = "#cookieinfo * {margin: 0px; padding: 0px;} #cookieinfo {position: fixed; font-size: 12px; font-family: Arial, Verdana, sans-serif; left: 0px; bottom: 0px; right: 0px; background-color: #323334; padding: 20px; box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.5); z-index: 1000;} #cookieinfo h6 {font-size: 16px; font-weight: bold; color: #cdd7da; text-shadow: 0px 1px 1px rgba(0, 0, 0, 1); margin-bottom: 7px;} #cookieinfo p {font-size: 12px; color: #afb4bc; line-height: 1.5em; text-shadow: 0px 1px 1px rgba(0, 0, 0, 1);} #cookieinfo button {display: block; position: absolute; right: 10px; top: 10px; width: 22px; height: 22px; border:0px; border-radius: 11px; line-height: 22px; font-size: 12px; color: #ffffff; text-align: center; text-decoration: none; background-color: #ff6000; box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);} #cookieinfo button:hover {background-color: #ff7925;}";

    container.setAttribute('id', 'cookieinfo');
    container.setAttribute('class', 'cookie-alert');

    container.innerHTML = '<style>' + style + '</style>' + '<h6>Ta strona wykorzystuje pliki cookie</h6><p>Używamy informacji zapisanych za pomocą plików cookies w celu zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies kliknij na &bdquo;x&rdquo; w prawym górnym rogu tej informacji. Jeśli nie wyrażasz zgody, ustawienia dotyczące plików cookies możesz zmienić w swojej przeglądarce.</p>';

    close.innerHTML = 'x';

    container.appendChild(close);
    document.body.appendChild(container);
    close.addEventListener('click', function () {
      document.cookie = "name=SmartHome";
      console.log("jestem");
      container.removeChild(close);
      document.body.removeChild(document.getElementById('cookieinfo'));
    });
    return null;
  }
}
