import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, BaseRequestOptions, RequestOptions} from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import {
  TranslateService,
  TranslateModule,
  MissingTranslationHandler,
  TranslateLoader,
  TranslateStaticLoader
} from 'ng2-translate';

import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {FunctionsComponent} from './functions/functions.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {LoginComponent} from './login/login.component';
import {routing, appRoutingProviders} from './app.routes';
import {GalleryComponent} from './gallery/gallery.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MyMissingTranslationHandler} from './missingtemplate.component';
import {FooterComponent} from './footer/footer.component'

import {TemperatureComponent} from './temperature/temperature.component';
import {LightComponent} from './light/light.component';
import {MockBackend} from "@angular/http/testing";
import {OfferComponent} from './offer/offer.component';
import {PressureComponent} from './pressure/pressure.component';
import {BlindsComponent} from './blinds/blinds.component';

export function httpFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    FunctionsComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    GalleryComponent,
    NavbarComponent,
    FooterComponent,
    TemperatureComponent,
    LightComponent,
    OfferComponent,
    PressureComponent,
    BlindsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: httpFactory,
      deps: [Http]
    })
  ],
  providers: [
    appRoutingProviders,
    TranslateService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },

    {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
    MockBackend,
    BaseRequestOptions,
  ],
  bootstrap: [AppComponent]

})

export class AppModule {
}
