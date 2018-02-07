import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { PokedexPokemonService } from '@app/services/pokedex-pokemon.service';
import { IPokedexPokemon } from '@app/interfaces';
import { Observable } from 'rxjs/Observable';
import {Location} from '@angular/common';


@Component({
    templateUrl: './pokedex-pokemon-page.component.html',
    styleUrls: ['./pokedex-pokemon-page.component.scss'],
    providers: [PokedexPokemonService],
})

export class PokedexPokemonPageComponent implements OnInit, OnDestroy {

    private url: string;
    private sub: any;
    private pokemon = <IPokedexPokemon>{};

    private pokedexPokemonName: string;
    private pokedexPokemonSprite: string;
    private pokedexPokemonId: number;

    constructor ( private location: Location, private getPokedexPokemonService: PokedexPokemonService, private router: ActivatedRoute ) { }

    public ngOnInit() {
        this.sub = this.router.params.subscribe((params) => {
            this.url = params.url;
            this.getPokemon(this.url);
         });
    }

    private getPokemon(url: string) {
        this.getPokedexPokemonService.getPokedexCall(url).subscribe((resp: IPokedexPokemon) => {
                this.pokemon = resp;
                console.log(this.pokemon);

            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
      }
    private goBack(): void {
        this.location.back();
    }
}
