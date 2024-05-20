import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen1';
  items = [
    {
      label: 'Home',
      routerLink: '/home',
      icon:'pi pi-home'
    },
    {
      label: 'About',
      routerLink: '/about',
      icon:'pi pi-shop'
    },
    {
      label: 'Contact',
      routerLink: '/contact',
      icon:'pi pi-shopping-cart'
    },
    {
      label: 'Posts',
      routerLink: '/posts',
      icon:'pi pi-users'
    }
  ]
}
