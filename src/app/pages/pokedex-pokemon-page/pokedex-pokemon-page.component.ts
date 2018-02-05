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
    private pokemon = <IPokedexPokemon>{};

    private pokedexPokemonName: string;
    private pokedexPokemonSprite: string;
    private pokedexPokemonId: number;

    constructor ( private getPokedexPokemonService: PokedexPokemonService, private route: ActivatedRoute ) { }

    public ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            this.url = params.url;
            this.getPokemon(this.url);
         });
    }

    private getPokemon(url: string) {
        this.getPokedexPokemonService.getPokedexCall(url).subscribe((res: IPokedexPokemon) => {
                this.pokemon = res;
                this.pokedexPokemonId = this.pokemon.id;
                this.pokedexPokemonName = this.pokemon.name;
                this.pokedexPokemonSprite = this.pokemon.sprites.front_default;
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
      }
}
