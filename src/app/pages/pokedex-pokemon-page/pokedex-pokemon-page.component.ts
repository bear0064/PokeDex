import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { PokedexPokemonService } from '@app/services/pokedex-pokemon.service';
import { IPokedexPokemon } from '@app/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './pokedex-pokemon-page.component.html',
    styleUrls: ['./pokedex-pokemon-page.component.scss'],
    providers: [PokedexPokemonService]
})

export class PokedexPokemonPageComponent implements OnInit, OnDestroy {

    private url: string;
    private sub: any;
    private pokedexPokemon: any;
    private pokedexPokemonName: string;
    private pokedexPokemonSprite: any;

    constructor ( private getPokedexPokemonService: PokedexPokemonService, private route: ActivatedRoute ) { }

    public ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            this.url = params.url;
            this.getPokemon(this.url);
         });
    }

    private getPokemon(url: string) {
        this.getPokedexPokemonService.getPokedexCall(url).subscribe((result: IPokedexPokemon) => {
                this.separatePokeData(result);
            });
    }
    private separatePokeData(result: any) {
        console.log(result);
        this.pokedexPokemon = result;
        this.pokedexPokemonName = result.name;
        this.pokedexPokemonSprite = result.sprites.front_default;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
      }
}
