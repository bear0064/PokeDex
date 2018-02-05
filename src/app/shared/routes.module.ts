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


const routes: Routes = [
    {
        path: '',
        redirectTo: 'pokedexselection',
        pathMatch: 'full'
    },
    { path: 'pokedexselection', component: PokedexSelectionPageComponent },
    { path: 'pokedexregion/:url', component: PokedexRegionPageComponent },
    { path: 'pokedexpokemon/:url', component: PokedexPokemonPageComponent },
    // { path: 'pokemon/:id' },

    // { path: '**', redirectTo: '/app/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PokedexRoutingModule { }
