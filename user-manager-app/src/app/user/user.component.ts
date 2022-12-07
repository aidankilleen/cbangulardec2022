import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'user',
  template: `
    <hr>
    <button (click)="onEdit()" *ngIf="!editing">Edit</button>
    <button (click)="onSave()" *ngIf="editing">Save</button>
    <button (click)="onCancel()" *ngIf="editing">Cancel</button>
    <div *ngIf="!editing">
    <h2>Viewing</h2>
      <table *ngIf="!editing">
        <tr>
          <td>Id:</td><td>{{ user!.id }}</td>
        </tr>
        <tr>
          <td>Name:</td><td>{{ user!.name }}</td>
        </tr>
        <tr>
          <td>Email:</td><td>{{ user!.email }}</td>
        </tr>
        <tr>
          <td>Active:</td><td>{{ user!.active ? "Active" : "Inactive" }}</td>
        </tr>
      </table>
    </div>
    <div *ngIf="editing">
      <h2>Editing</h2>
      <label>Id</label>
      <input [value]= "editingUser.id" readonly><br>
      <label>Name</label>
      <input [(ngModel)]="editingUser.name"><br>
      <label>Email</label>
      <input [(ngModel)]="editingUser.email"><br>
      <label>Active</label>
      <input type="checkbox" [(ngModel)]="editingUser.active"><br>
    </div>
    <hr>
    {{ editingUser | json }}
  `,
  styleUrls: ['./user.component.css']

}) 
export class UserComponent {
  @Input() user: User | undefined = new User(-1, "", "", false);
  @Output() userChange = new EventEmitter();

  editingUser: User = new User(-1, "", "", false);

  editing = false;
  onSave() {
    // option 1 - modify the object that was passed in
    //this.user.id = this.editingUser.id;
    //this.user.name = this.editingUser.name;
    //this.user.email = this.editingUser.email;
    //this.user.active = this.editingUser.active;

    // option 2 - change the reference
    // this won't modify the object that was 
    // passed in.
    this.user = this.editingUser;
    this.editing = false;

    this.userChange.emit(this.user);
  }
  onEdit() {
    // this.editingUser = this.user big problem - because editingUser will 
    // just be a reference to this.user

    // clone this.user instead
    this.editingUser = new User(this.user!.id, 
                                this.user!.name, 
                                this.user!.email, 
                                this.user!.active);
    this.editing = true;
  }
  onCancel() {
    this.editing = false;
  }
}
