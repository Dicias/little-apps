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
      path: 'mortage',
      image: '../../../../assets/mortage_calculator.png'
     },
     {title: "2_New_Proyect",
      path: 'mortage',
      image: '../../../../assets/pixel-img.png'
     },
     {title: "3_New_Proyect",
      path: 'mortage',
      image: '../../../../assets/pixel-img.png'
     },
     {title: "4_New_Proyect",
      path: 'mortage',
      image: '../../../../assets/pixel-img.png'
     },
     {title: "5_New_Proyect",
      path: 'mortage',
      image: '../../../../assets/pixel-img.png'
     },
     {title: "6_New_Proyect",
      path: 'mortage',
      image: '../../../../assets/pixel-img.png'
     },
     {title: "7_New_Proyect",
      path: 'mortage',
      image: '../../../../assets/pixel-img.png'
     },
     {title: "8_New_Proyect",
      path: 'mortage',
      image: '../../../../assets/pixel-img.png'
     },
  ]
}
