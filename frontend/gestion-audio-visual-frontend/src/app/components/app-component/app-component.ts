import { Component } from '@angular/core';
import { MenuLateral } from '../menu-lateral/menu-lateral.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MenuLateral],
  template: `
    <app-menu-lateral></app-menu-lateral>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
