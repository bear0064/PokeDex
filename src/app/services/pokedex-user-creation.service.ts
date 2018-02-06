import { Injectable, Inject } from '@angular/core';
import { IPokedexUser } from '@app/interfaces';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable()
export class PokedexUserCreation {

    private user: IPokedexUser[];
    public data: any = [];

    constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService ) {}

    // A simple creation service used for mock registration

    public userCreationService(key, val): any {
        console.log('recieved key:' + key + 'value:' + val);
        this.storage.set(key, val);
        this.data[key] = this.storage.get(key);
    }

}
