import { NgModule, Optional, SkipSelf } from '@angular/core';

import {  } from 'src/app/services';

@NgModule({
    imports: [],
    declarations: [],
    providers: [],
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
