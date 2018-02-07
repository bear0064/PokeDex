import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PokedexCoreModule } from './shared/core.module';
import { PokedexRoutingModule } from './shared/routes.module';
import { PokedexPagesModule } from './pages/pages.module';

import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    PokedexCoreModule,
    PokedexRoutingModule,
    PokedexPagesModule,
    StorageServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

