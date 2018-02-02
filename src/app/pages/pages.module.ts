// export components
export * from '../pages/layout/nav-layout.component';
export * from '../pages/pokedex-page/pokedex-page.component';
// components
import { PokedexNavLayoutComponent } from '../pages/layout/nav-layout.component';
import { PokedexPokedexPageComponent } from '../pages/pokedex-page/pokedex-page.component';
import { NgModule } from '@angular/core';

// navigation
import { RouterModule } from '@angular/router';

// settings components

const PAGES = [
    PokedexNavLayoutComponent,
    PokedexPokedexPageComponent,
];

const COMPONENTS = [

];

@NgModule({
    imports: [
        RouterModule,
    ],
    exports: [PAGES],
    declarations: [PAGES, COMPONENTS],
})

export class PokedexPagesModule { }
