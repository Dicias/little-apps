import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  constructor(private router: Router) {}

  @Input()
  public title = '';

  @Input()
  public path = '';

  @Input()
  public image = '';

  navigate():void {
    this.router.navigateByUrl(this.path);
  }


}
