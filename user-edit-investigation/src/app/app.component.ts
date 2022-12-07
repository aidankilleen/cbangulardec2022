import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>User Component Investigation</h1>

  <!--
  <user 
    [user]="user"
    (userChange)="onUserChange($event)"></user>
-->

<!-- two way data binding works with an object -->
<!-- as long as there is an Output() name userChange -->
  <user [(user)]="user"></user>
  <hr>
  {{ user | json }}
  <hr>

  {{ users | json }}
  <hr>

  <!--
    two way data binding doesn't work because template variables (user) 
    is readonly
  <user 
    *ngFor="let user of users"
    [(user)]="user">
  </user>
  -->
  <user 
    *ngFor="let user of users" 
    [user]="user"
    (userChange)="onListUserChange($event)">
  </user>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = new User(1, "Alice", "alice@gmail.com", false);

  users: User[] = [
    new User(2, "Bob", "bob@gmail.com", true), 
    new User(3, "Carol", "carol@gmail.com", true), 
    new User(4, "Dan", "dan@gmail.com", false), 
    new User(5, "Eve", "eve@gmail.com", true), 
  ]

  onListUserChange(changedUser: User) {
    let index = this.users.findIndex(user => user.id == changedUser.id);
    this.users.splice(index, 1, changedUser);
  }

  // there is no need for an event handler 
  // when using two-way data binding
  onUserChange(changedUser: User) {

    //alert(JSON.stringify(changedUser));
    this.user = changedUser;
  }

}
