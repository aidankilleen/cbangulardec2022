import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    the price is {{ price | currency:'EUR' }}<br>

    today is {{ today | date:'yyyy-MM-dd' }}<br>

    <input type="range" 
      [(ngModel)]="length" 
      [max]="text.length">

    <p>{{ text | summary:length }}</p>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe investigation';

  price = 22/7;

  today = new Date();

  text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas porro officiis aperiam reiciendis veritatis nostrum! Aspernatur, quae, non perspiciatis aliquam dolore blanditiis quidem laudantium, temporibus omnis accusantium magnam modi?
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam esse ex aliquid est nobis eligendi vel accusantium qui impedit, quis quasi? Excepturi nesciunt temporibus nihil cumque! Iste rem ipsam dicta.`;

  length = 20;


}
