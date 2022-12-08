import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <a routerLink="home" routerLinkActive="active-link">Home</a> | 
    <a routerLink="about" routerLinkActive="active-link">About</a> |
    <a routerLink="contact" routerLinkActive="active-link">Contact</a> | 
    <a routerLink="users" routerLinkActive="active-link">User List </a>
    <hr>

    <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing investigation';
}
