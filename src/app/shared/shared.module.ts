import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapMDModule } from './bmd-lib.module';
import { CapitalizePipe } from '@app/components/pipe/';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, BootstrapMDModule ],
    declarations: [ CapitalizePipe ],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, BootstrapMDModule, CapitalizePipe ]
})

export class PokedexSharedModule { }
