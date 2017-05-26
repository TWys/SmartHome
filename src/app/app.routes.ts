import {ModuleWithProviders}         from '@angular/core';
import {Routes, RouterModule}        from '@angular/router';

import {HomeComponent}               from './home/home.component';
import {FunctionsComponent}               from './functions/functions.component';
import {GalleryComponent}               from './gallery/gallery.component';
// import {HomeComponent}               from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'functions', component: FunctionsComponent},
  {path: 'gallery', component: GalleryComponent}

];

export const appRoutingProviders: any[] = [];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);