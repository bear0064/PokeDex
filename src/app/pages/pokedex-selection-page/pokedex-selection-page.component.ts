import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexSelectionService } from '@app/services/pokedex-selection.service';
import { IPokedex } from '@app/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './pokedex-selection-page.component.html',
    styleUrls: ['./pokedex-selection-page.component.scss'],
    providers: [PokedexSelectionService]
})

export class PokedexSelectionPageComponent implements OnInit {

    private pokedexRegionList = <IPokedex>{};

    constructor ( private getPokedexService: PokedexSelectionService, private router: Router ) { }

    public ngOnInit() {
        this.getPokedex();
    }

    private getPokedex() {
        this.getPokedexService.getPokedexRegionCall().subscribe((resp: IPokedex) => {
            this.pokedexRegionList = resp;
            });
    }
}
