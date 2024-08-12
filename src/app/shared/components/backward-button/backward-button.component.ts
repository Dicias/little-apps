import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-backward-button',
  templateUrl: './backward-button.component.html',
  styleUrl: './backward-button.component.css'
})
export class BackwardButtonComponent {

  private router = inject(Router);

  backward():void {
    this.router.navigateByUrl('');
  }

}
