import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// template partials
import {
    PokedexNavLayoutComponent,
} from '@app/pages/pages.module';

// template pages
import { PokedexSelectionPageComponent } from '@app/pages/pokedex-selection-page/pokedex-selection-page.component';
import { PokedexRegionPageComponent } from '@app/pages/pokedex-region-page/pokedex-region-page.component';
import { PokedexPokemonPageComponent } from '@app/pages/pokedex-pokemon-page/pokedex-pokemon-page.component';
import { PokedexRegistrationPageComponent } from '@app/pages/pokedex-registration-page/pokedex-registration-page.component';
import { PokedexLoginPageComponent } from '@app/pages/pokedex-login-page/pokedex-login-page.component';
import { Pokedex404PageComponent } from '@app/pages/404-page/404-page.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'pokedexlogin',
        pathMatch: 'full'
    },
    {
        path: '',
        component: PokedexNavLayoutComponent,
        children: [
            { path: '', redirectTo: 'pokedexselection', pathMatch: 'full' },
            { path: 'pokedexselection', component: PokedexSelectionPageComponent },
            { path: 'pokedexregion/:url', component: PokedexRegionPageComponent },
            { path: 'pokedexpokemon/:url', component: PokedexPokemonPageComponent },
        ]
    },
    { path: 'pokedexregistration', component: PokedexRegistrationPageComponent },
    { path: 'pokedexlogin', component: PokedexLoginPageComponent },
    { path: '**',  component: Pokedex404PageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PokedexRoutingModule { }
