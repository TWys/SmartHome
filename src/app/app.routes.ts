import {ModuleWithProviders}         from '@angular/core';
import {Routes, RouterModule}        from '@angular/router';

import {HomeComponent}               from './home/home.component';
import {FunctionsComponent}               from './functions/functions.component';
import {GalleryComponent}               from './gallery/gallery.component';
import {OfferComponent}               from './offer/offer.component';
import {AboutComponent}               from './about/about.component';
import {ContactComponent}               from './contact/contact.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'functions', component: FunctionsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
  ];

export const appRoutingProviders: any[] = [];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
