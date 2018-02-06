import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { PokedexRegionService } from '@app/services/pokedex-region.service';
import { IPokedexRegion } from '@app/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './pokedex-region-page.component.html',
    styleUrls: ['./pokedex-region-page.component.scss'],
    providers: [PokedexRegionService]
})

export class PokedexRegionPageComponent implements OnInit, OnDestroy {

    private url: string;
    private sub: any;

    private pokedexRegionPokemonList = <IPokedexRegion>{};

    constructor ( private getPokedexRegionService: PokedexRegionService, private route: ActivatedRoute ) { }

    public ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            this.url = params.url;
            this.getPokedex(this.url);
         });
    }

    private getPokedex(url: string) {
        this.getPokedexRegionService.getPokedexCall(url).subscribe((resp: IPokedexRegion) => {
            this.pokedexRegionPokemonList = resp;
            });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
      }
}
