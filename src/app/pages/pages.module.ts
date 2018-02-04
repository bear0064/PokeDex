// export components
export * from '@app/pages/layout/nav-layout.component';
export * from '@app/pages/pokedex-page/pokedex-page.component';

// components
import { PokedexNavLayoutComponent } from '@app/pages/layout/nav-layout.component';
import { PokedexPokedexPageComponent } from '@app/pages/pokedex-page/pokedex-page.component';

import { NgModule } from '@angular/core';
import { PokedexSharedModule } from '@app/shared/shared.module';

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
        PokedexSharedModule
    ],
    exports: [PAGES, COMPONENTS],
    declarations: [PAGES, COMPONENTS],
})

export class PokedexPagesModule { }
