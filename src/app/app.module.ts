import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokedexCoreModule } from './shared/core.module';
import { PokedexRoutingModule } from './shared/routes.module';

import { PokedexPagesModule } from './pages/pages.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
