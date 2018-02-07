import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PokedexUserCreation } from '@app/services/pokedex-user-creation.service';
import { caseValidator } from '@app/components/validator/pattern-validator';

@Component({
    selector: 'app-pokedex-registration',
    templateUrl: './pokedex-registration-page.component.html',
    styleUrls: ['./pokedex-registration-page.component.scss'],
    providers: [PokedexUserCreation]
})

export class PokedexRegistrationPageComponent implements OnInit {

    private registrationForm: FormGroup;

    constructor ( private getPokedexUserCreation: PokedexUserCreation, private router: Router ) { }

    ngOnInit() {
        this.createRegistrationForm();
    }

    private createRegistrationForm() {
        console.log(this.registrationForm);

        this.registrationForm = new FormGroup({
            username: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required,
                // tslint:disable-next-line:max-line-length
                caseValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            password: new FormControl('', [Validators.required,
                // tslint:disable-next-line:max-line-length
                caseValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
            });
    }
    public register() {
        this.router.navigateByUrl('/pokedexselection');
        console.log(this.registrationForm.value);
    }
}
