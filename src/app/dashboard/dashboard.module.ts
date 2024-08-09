import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardPageComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }
