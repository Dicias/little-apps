import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MortageRoutingModule } from './mortage-routing.module';
import { MortagePageComponent } from './pages/mortage-page/mortage-page.component';
import { TypeInputComponent } from './components/type-input/type-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    MortagePageComponent,
    TypeInputComponent
  ],
  imports: [
    CommonModule,
    MortageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
]
})
export class MortageModule { }
