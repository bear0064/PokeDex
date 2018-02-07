import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { caseValidator } from '@app/components/validator/pattern-validator';


@Component({
    selector: 'app-pokedex-login',
    templateUrl: './pokedex-login-page.component.html',
    styleUrls: ['./pokedex-login-page.component.scss'],
})

export class PokedexLoginPageComponent implements OnInit {

    private loginForm: FormGroup;

    constructor ( private router: Router ) { }

    public ngOnInit() {
        this.createLoginForm();
    }

    private createLoginForm() {
        this.loginForm = new FormGroup({
          // tslint:disable-next-line
          email: new FormControl('', [Validators.required, caseValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
          password: new FormControl('', Validators.required),
        });
      }

      public login() {
        this.router.navigateByUrl('/pokedexselection');
        console.log(this.loginForm.value);
      }


}
