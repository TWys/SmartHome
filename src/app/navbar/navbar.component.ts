import {Component, OnInit, OnDestroy} from '@angular/core';
import {Auth} from '../auth.service';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {TranslateService} from "ng2-translate";

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  providers: [Auth],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../app.component.css', '../../assets/bootstrap/css/bootstrap.css']
})
export class NavbarComponent implements OnInit {

  private subscription: Subscription;

  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute, private auth: Auth) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }

  ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        const locale = param['locale'];
        if (locale !== undefined) {
          this.translate.use(locale);
        }
      });
  }
  //
  // ngOnDestroy() {
  //   // prevent memory leak by unsubscribing
  //   this.subscription.unsubscribe();
  // }
}
