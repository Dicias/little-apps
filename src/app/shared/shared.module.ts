import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackwardButtonComponent } from './components/backward-button/backward-button.component';


@NgModule({
  declarations: [
    BackwardButtonComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackwardButtonComponent,
  ]
})
export class SharedModule { }
