import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatMenuModule } from '@angular/material';

@Component({
    templateUrl: './nav-layout.component.html',
    styleUrls: ['./nav-layout.component.scss'],
})

export class PokedexNavLayoutComponent implements OnInit {

    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    constructor ( private router: Router ) { }
    public ngOnInit() {
    }

    public someMethod() {
    this.trigger.openMenu();
  }
}
