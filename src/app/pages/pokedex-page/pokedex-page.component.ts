import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexPokedexService } from '@app/services/pokedex.service';
import { IPokedex } from '@app/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './pokedex-page.component.html',
    styleUrls: ['./pokedex-page.component.scss'],
    providers: [PokedexPokedexService]
})

export class PokedexPokedexPageComponent implements OnInit {

    private pokedexList: Array<any>;

    constructor ( private getPokedexService: PokedexPokedexService, private router: Router ) { }

    public ngOnInit() {
        this.getPokedex();
    }

    private getPokedex() {
        this.getPokedexService.getPokedexCall().subscribe((result: IPokedex) => {
            this.pokedexList = result.results;
            console.log(this.pokedexList);
            });
    }



}
