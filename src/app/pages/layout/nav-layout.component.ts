import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl: './nav-layout.component.html',
    styleUrls: ['./nav-layout.component.scss'],
})

export class PokedexNavLayoutComponent implements OnInit {

    constructor ( private router: Router) { }
    public ngOnInit() {
    }

}
