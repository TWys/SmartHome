import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FunctionsComponent } from './functions/functions.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FunctionsDescriptionComponent } from './functions-description/functions-description.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    FunctionsComponent,
    AboutComponent,
    ServicesComponent,
    FunctionsDescriptionComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,ContactComponent,HomeComponent]
})
export class AppModule { }
