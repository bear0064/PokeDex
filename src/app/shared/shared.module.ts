import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, MaterialModule],
    exports: [CommonModule, FormsModule, HttpClientModule, MaterialModule]
})

export class PokedexSharedModule { }
