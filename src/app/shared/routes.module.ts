import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
// template partials
import {
    PokedexNavLayoutComponent,
} from '@app/pages/pages.module';

// template pages
import { PokedexPokedexPageComponent } from '@app/pages/pokedex-page/pokedex-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'app/pokedex',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: PokedexNavLayoutComponent,
        children:
            [
                { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
                { path: 'pokedex', component: PokedexPokedexPageComponent },
            ]
    },
    // { path: '**', redirectTo: '/app/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PokedexRoutingModule { }
