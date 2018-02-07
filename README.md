# PokeDex

Welcome to the Global Pokedex Service

## Quickstart

### Install Dependencies

Run `npm install` to install all required Dependancies. The app will throw some warnings regarding:

```
npm WARN angular-bootstrap-md@5.1.2 requires a peer of @angular/animations@5.0.0 - 5.1.2 but none is installed. You must install peer dependencies yourself.
npm WARN angular-bootstrap-md@5.1.2 requires a peer of @angular/common@5.0.0 - 5.1.2 but none is installed. You must install peer dependencies yourself.
npm WARN angular-bootstrap-md@5.1.2 requires a peer of @angular/compiler@5.0.0 - 5.1.2 but none is installed. You must install peer dependencies yourself.
npm WARN angular-bootstrap-md@5.1.2 requires a peer of @angular/core@5.0.0 - 5.1.2 but none is installed. You must install peer dependencies yourself.
npm WARN angular-bootstrap-md@5.1.2 requires a peer of @angular/forms@5.0.0 - 5.1.2 but none is installed. You must install peer dependencies yourself.
npm WARN angular-bootstrap-md@5.1.2 requires a peer of chart.js@2.5.x but none is installed. You must install peer dependencies yourself.
npm WARN angular-bootstrap-md@5.1.2 requires a peer of hammerjs@2.0.x but none is installed. You must install peer dependencies yourself.
```

@angular-bootstrap-md will warn you of unmet dependancies however, the application will still work and buid - Upon reading their documentation:

>Warnings will disappear as soon as 3rd party libs will release their updates for Angular 5. From our side, we have tested our package against Angular 5 and we can confirm that those warnings don’t affect the functionalities so you can ignore them as Angular 5 is backwards compatible with Angular 4. As a result, thus 3rd party plugins are working correctly with Angular 5, however warning that they have been fully tested with Angular 4.0.3.


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve --open` to run the server and open a new window to the application.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Application Login

The application has no actual route guards or endpoints for login. 
The login for requires an email which will be validated - example@something.com and a password - (any) which has no validation or requirements.

The registration page is for the sake of validation testing, it contains no endpoint and stores no data. 
The registraton form validates all fields: 
name:
* required

email: 
* proper email format

password which is tested against:
* Between (8 - 32 ) chars
    * At least 1 Uppercase Alphabet
    * 1 Lowercase Alphabet
    * 1 Number
    * 1 Special Character 

