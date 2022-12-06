import { Component } from '@angular/core';

/*
@Component({
  selector: 'app-root',
  template: `
    <div [ngClass] = "{ 'dark-mode' : darkMode }">

      Dark Mode:<input type="checkbox" [(ngModel)]="darkMode"> {{ darkMode }}

      <h1>{{ title | titlecase }}</h1>
      <input #txtName [value]="name" (keyup)="onChange(txtName.value)">
      <button (click)="name=''">reset</button>
      <hr>
      {{ name }}
      <hr>
      <input [(ngModel)]="town">
      <button (click)="town = ''">reset</button><br>
      {{ town }}

      <hr>
      <input type="number" [(ngModel)]="width"><br>
      <input type="range" [(ngModel)]="height" min="20" max="200">
      <div class="box" [ngStyle]="{'width': width + 'px', 'height': height + 'px'}">
        box
      </div>
      {{ width }} {{ height }}

      <hr>

      <select [(ngModel)]="selectedCounty">
        <option *ngFor="let county of counties">{{ county }}</option>
      </select>

      {{ selectedCounty }}

      <hr>

      Radio Button Test:

      <div *ngFor="let colour of colours" [ngStyle]="{'color': selectedColour }">
        <label>{{colour}}</label>
        <input type="radio" [value]="colour" [(ngModel)]="selectedColour">
      </div>
      <hr>
      {{ selectedColour }}


    </div> 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colours = ['red', 'green', 'blue', 'orange', 'yellow'];
  selectedColour = this.colours[0];

  counties = ['Dublin', 'Cork', 'Limerick', 'Galway', 'Waterford', 'Kerry'];
  selectedCounty = this.counties[0];



  width = 100;
  height = 100;


  title = 'user edit investigation';
  name = "Aidan";
  darkMode = false;

  town = "Cork";

  onChange(name: string) {
    this.name = name;

  }
}
*/
