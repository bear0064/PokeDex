import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PokedexCoreModule } from './shared/core.module';
import { PokedexRoutingModule } from './shared/routes.module';

import { PokedexPagesModule } from './pages/pages.module';

import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    PokedexCoreModule,
    PokedexRoutingModule,
    PokedexPagesModule,
    StorageServiceModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
