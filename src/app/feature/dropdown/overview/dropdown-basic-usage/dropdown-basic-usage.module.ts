import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownBasicUsageRoutingModule } from './dropdown-basic-usage-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownBasicUsageComponent, AdvancedUsageComponent } from './index';

/**
 * Module class for containing dropdown basic usage module.
 */
@NgModule({
  declarations: [
    DropdownBasicUsageComponent,
    AdvancedUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownBasicUsageRoutingModule
  ],
  providers: []
})
export class DropdownBasicUsageModule {
}
