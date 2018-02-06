import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexUserCreation } from '@app/services/pokedex-user-creation.service';

@Component({
    templateUrl: './pokedex-registration-page.component.html',
    styleUrls: ['./pokedex-registration-page.component.scss'],
    providers: [PokedexUserCreation]
})

export class PokedexRegistrationPageComponent implements OnInit {

    private formPayload: any = {};

    constructor ( private getPokedexUserCreation: PokedexUserCreation, private router: Router ) { }

    ngOnInit() {
        this.passValue();
    }

    private passValue(): any {
        this.getPokedexUserCreation.userCreationService('test', 'case');
    }

}
