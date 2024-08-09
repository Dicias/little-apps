import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortagePageComponent } from './pages/mortage-page/mortage-page.component';

const routes: Routes = [
  {
    path:'',
    component: MortagePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MortageRoutingModule { }
