import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MortageRoutingModule } from './mortage-routing.module';
import { MortagePageComponent } from './pages/mortage-page/mortage-page.component';
import { MoneyInputComponent } from './components/money-input/money-input.component';
import { TermInputComponent } from './components/term-input/term-input.component';
import { InterestInputComponent } from './components/interest-input/interest-input.component';
import { TypeInputComponent } from './components/type-input/type-input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MortagePageComponent,
    MoneyInputComponent,
    TermInputComponent,
    InterestInputComponent,
    TypeInputComponent
  ],
  imports: [
    CommonModule,
    MortageRoutingModule,
    ReactiveFormsModule
  ]
})
export class MortageModule { }
