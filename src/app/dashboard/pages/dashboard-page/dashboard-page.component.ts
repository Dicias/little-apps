import { Component, inject } from '@angular/core';
import { ProyectsService } from '../../services/proyects.service';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

  private proyect = inject(ProyectsService)

  //TODO reestructurar los datos al servicio
  public proyects = this.proyect.getProyect;
}
