import { Component, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `
    <button (click)="editing = !editing">{{ editing ? "View" : "Edit" }}</button>
    <div *ngIf="!editing">
    <h2>Viewing</h2>
      <table *ngIf="!editing">
        <tr>
          <td>Id:</td><td>{{ user.id }}</td>
        </tr>
        <tr>
          <td>Name:</td><td>{{ user.name }}</td>
        </tr>
        <tr>
          <td>Email:</td><td>{{ user.email }}</td>
        </tr>
        <tr>
          <td>Active:</td><td>{{ user.active ? "Active" : "Inactive" }}</td>
        </tr>
      </table>
    </div>
    <div *ngIf="editing">
      <h2>Editing</h2>
      <label>Id</label>
      <input [value]= "user.id" readonly><br>
      <label>Name</label>
      <input [(ngModel)]="user.name"><br>
      <label>Email</label>
      <input [(ngModel)]="user.email"><br>
      <label>Active</label>
      <input type="checkbox" [(ngModel)]="user.active"><br>
    </div>
  `,
  styleUrls: ['./user.component.css']
}) 
export class UserComponent {
  @Input() user: User = new User(-1, "", "", false);
  editing = false;
}
