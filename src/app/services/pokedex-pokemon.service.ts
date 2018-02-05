import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPokedexPokemon } from '@app/interfaces';

@Injectable()
export class PokedexPokemonService {

    constructor(private http: HttpClient) {}

    public getPokedexCall(url: string):  Observable<IPokedexPokemon> {
        return this.http.get<IPokedexPokemon>('https://pokeapi.co/api/v2/pokemon/' + url);
    }
}
