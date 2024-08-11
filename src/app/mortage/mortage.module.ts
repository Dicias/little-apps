import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MortageRoutingModule } from './mortage-routing.module';
import { MortagePageComponent } from './pages/mortage-page/mortage-page.component';
import { TypeInputComponent } from './components/type-input/type-input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MortagePageComponent,
    TypeInputComponent
  ],
  imports: [
    CommonModule,
    MortageRoutingModule,
    ReactiveFormsModule
  ]
})
export class MortageModule { }
