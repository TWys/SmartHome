import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FunctionsComponent } from './functions/functions.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { routing, appRoutingProviders } from './app.routes';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';
import { TemperatureComponent } from './temperature/temperature.component';
import { LightComponent } from './light/light.component';


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
    TranslatePipe,
    TemperatureComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    TranslateService,
    TRANSLATION_PROVIDERS
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

