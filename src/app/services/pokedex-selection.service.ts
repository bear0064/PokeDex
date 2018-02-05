import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPokedex } from '@app/interfaces';

@Injectable()
export class PokedexSelectionService {

    constructor(private http: HttpClient) {}

    public getPokedexRegionCall():  Observable<IPokedex> {
        return this.http.get<IPokedex>('https://pokeapi.co/api/v2/pokedex/');
    }
}
