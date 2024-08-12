import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

constructor() { }

private _proyects: Proyect[] = [
  {title: "Mortage_Proyect",
    path: 'mortage',
    image: '../../../../assets/mortage_calculator.png'
   },
   {title: "2_New_Proyect",
    path: '',
    image: '../../../../assets/pixel-img.png'
   },
   {title: "3_New_Proyect",
    path: '',
    image: '../../../../assets/pixel-img.png'
   },
   {title: "4_New_Proyect",
    path: '',
    image: '../../../../assets/pixel-img.png'
   },
   {title: "5_New_Proyect",
    path: '',
    image: '../../../../assets/pixel-img.png'
   },
   {title: "6_New_Proyect",
    path: '',
    image: '../../../../assets/pixel-img.png'
   },
   {title: "7_New_Proyect",
    path: '',
    image: '../../../../assets/pixel-img.png'
   },
   {title: "8_New_Proyect",
    path: '',
    image: '../../../../assets/pixel-img.png'
   },
]

get getProyect(){
  return this._proyects
}

}
