import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPokedexRegion } from '@app/interfaces';

@Injectable()
export class PokedexRegionService {

    constructor(private http: HttpClient) {}

    public getPokedexCall(url: string):  Observable<IPokedexRegion> {
        return this.http.get<IPokedexRegion>(url);
    }
}
