import {Component, OnInit} from '@angular/core';
import {Auth} from '../auth.service';
import {TranslateService} from '../translate';


@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  providers: [Auth, TranslateService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../app.component.css', '../../assets/bootstrap/css/bootstrap.css']
})
export class NavbarComponent implements OnInit {

  public translatedText: string;
  public supportedLanguages: any[];

  constructor(private auth: Auth, private _translate: TranslateService) {
  };

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      {display: 'Polski', value: 'pl'},
      {display: 'English', value: 'en'},
    ];

    // set current language
    this.selectLang('pl');
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('Sprawdź naszą ofertę!');
  }

}
