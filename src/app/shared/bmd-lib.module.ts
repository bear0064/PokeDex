// This is a workaround for the current issue with the lib --Caleb//
import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ButtonsModule } from 'angular-bootstrap-md';
import { RippleModule } from 'angular-bootstrap-md';
import { ActiveModule } from 'angular-bootstrap-md';
import { NavbarModule } from 'angular-bootstrap-md';
import { BsDropdownModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'angular-bootstrap-md';
import { MDBChartsModule } from 'angular-bootstrap-md';
import { CollapseModule } from 'angular-bootstrap-md';
import { ModalModule } from 'angular-bootstrap-md';
import { MDBTooltipModule } from 'angular-bootstrap-md';
import { PopoverModule } from 'angular-bootstrap-md';

export {
  ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective
} from 'angular-bootstrap-md';

export {
  RippleModule, RippleDirective
} from 'angular-bootstrap-md';

export {
  ActiveModule, ActiveDirective, InputValidateDirective
} from 'angular-bootstrap-md';

export {
  NavbarModule
} from 'angular-bootstrap-md';

export {
  BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective,
  BsDropdownModule, BsDropdownState, BsDropdownToggleDirective
} from 'angular-bootstrap-md';

export {
  CarouselComponent, CarouselConfig, CarouselModule
} from 'angular-bootstrap-md';

export {
  MDBChartsModule, BaseChartDirective
} from 'angular-bootstrap-md';

export {
  CollapseDirective, CollapseModule
} from 'angular-bootstrap-md';

export {
  ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService,
  ModalContainerComponent, MDBModalRef
} from 'angular-bootstrap-md';

export {
  TooltipConfig, TooltipContainerComponent, TooltipDirective, MDBTooltipModule
} from 'angular-bootstrap-md';

export {
  PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective
} from 'angular-bootstrap-md';



const MODULES = [
ButtonsModule,
RippleModule,
ActiveModule,
NavbarModule,
BsDropdownModule,
CarouselModule,
MDBChartsModule,
CollapseModule,
ModalModule,
MDBTooltipModule,
PopoverModule,
];

@NgModule({
  imports: [
  ButtonsModule,
  RippleModule.forRoot(),
  ActiveModule.forRoot(),
  NavbarModule,
  BsDropdownModule.forRoot(),
  CarouselModule.forRoot(),
  MDBChartsModule,
  CollapseModule.forRoot(),
  ModalModule.forRoot(),
  MDBTooltipModule.forRoot(),
  PopoverModule.forRoot(),
  ],
  exports: MODULES,
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class BootstrapMDRootModule {
}

@NgModule({exports: MODULES})
export class BootstrapMDModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: BootstrapMDRootModule};
  }
}
