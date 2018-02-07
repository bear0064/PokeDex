import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
    templateUrl: './nav-layout.component.html',
    styleUrls: ['./nav-layout.component.scss'],
})

export class PokedexNavLayoutComponent implements OnInit {

    constructor ( private router: Router, private location: Location ) { }
    public ngOnInit() {
    }

    private goBack(): void {
        this.location.back();
      }
}
