import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

  //esto sería más fácil si mandaras todo esto a un servicio y ya nada más lo inyectabas al card
  public proyects = [
    {title: "Mortage_Proyect",
      path: 'mortage'
     },
     {title: "2_New_Proyect",
      path: 'mortage'
     },
     {title: "3_New_Proyect",
      path: 'mortage'
     },
     {title: "4_New_Proyect",
      path: 'mortage'
     },
     {title: "5_New_Proyect",
      path: 'mortage'
     },
     {title: "6_New_Proyect",
      path: 'mortage'
     },
     {title: "7_New_Proyect",
      path: 'mortage'
     },
     {title: "8_New_Proyect",
      path: 'mortage'
     },
  ]
}
