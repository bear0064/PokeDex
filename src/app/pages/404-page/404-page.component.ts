import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './404-page.component.html',
    styleUrls: ['./404-page.component.scss'],
})

export class Pokedex404PageComponent {

    constructor ( private router: Router ) { }

}
