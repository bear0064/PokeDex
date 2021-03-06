// export components
export * from '@app/pages/layout/nav-layout.component';
export * from '@app/pages/pokedex-selection-page/pokedex-selection-page.component';
export * from '@app/pages/pokedex-region-page/pokedex-region-page.component';
export * from '@app/pages/pokedex-pokemon-page/pokedex-pokemon-page.component';
export * from '@app/pages/pokedex-registration-page/pokedex-registration-page.component';
export * from '@app/pages/pokedex-login-page/pokedex-login-page.component';


// components
import { PokedexNavLayoutComponent } from '@app/pages/layout/nav-layout.component';
import { PokedexSelectionPageComponent } from '@app/pages/pokedex-selection-page/pokedex-selection-page.component';
import { PokedexRegionPageComponent } from '@app/pages/pokedex-region-page/pokedex-region-page.component';
import { PokedexPokemonPageComponent } from '@app/pages/pokedex-pokemon-page/pokedex-pokemon-page.component';
import { PokedexRegistrationPageComponent } from '@app/pages/pokedex-registration-page/pokedex-registration-page.component';
import { PokedexLoginPageComponent } from '@app/pages/pokedex-login-page/pokedex-login-page.component';
import { Pokedex404PageComponent } from '@app/pages/404-page/404-page.component';


import { NgModule } from '@angular/core';
import { PokedexSharedModule } from '@app/shared/shared.module';

// navigation
import { RouterModule } from '@angular/router';

// settings components

const PAGES = [
    PokedexNavLayoutComponent,
    PokedexSelectionPageComponent,
    PokedexRegionPageComponent,
    PokedexPokemonPageComponent,
    PokedexRegistrationPageComponent,
    PokedexLoginPageComponent,
    Pokedex404PageComponent,
];

// Custom Components/Templates/Etc
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
