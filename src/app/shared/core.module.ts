import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { PokedexPokedexService } from '@app/services';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [],
    providers: [
        PokedexPokedexService,
    ],
})

export class PokedexCoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        core: PokedexCoreModule
    ) {
        if (core) {
            throw new Error('PokedexCoreModule should only be imported once at the app.module level');
        }
    }
}
