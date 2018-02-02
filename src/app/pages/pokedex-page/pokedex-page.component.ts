import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './pokedex-page.component.html',
    styleUrls: ['./pokedex-page.component.scss'],
})

export class PokedexPokedexPageComponent implements OnInit {
    constructor ( private router: Router ) { }
    public ngOnInit() {
    }
}
