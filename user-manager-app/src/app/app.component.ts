import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserHttpService } from './user-http.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <app-angular-bootstrap-nav></app-angular-bootstrap-nav>

    <router-outlet></router-outlet>



  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'user manager app';

  
}

/*

Original code reading and writing to UserService
Before implementing UserHttpService



import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UserHttpService } from './user-http.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <button (click)="onAddUser()">
      Add User
    </button>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of userService.getUsers()"
          (click)="onClickRow(user.id)"
          [ngClass]="{'selected-row': user.id == selectedUser?.id}"
          >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
          <td>
            <button (click)="onDelete(user.id)">
              Delete
            </button>
            <button (click)="onEdit(user)">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <user-modal 
      [display]="showDialog"
      [user]="selectedUser"
      (closed)="onDialogClosed($event)"
      (cancel)="onDialogCancel()">
    </user-modal>
    <hr>
    <button (click)="onClickTestHttp()">
      Test Http Call
    </button>
    <hr>
    {{ users | json }}
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user manager app';

  selectedUser: User | undefined = new User();
  showDialog: boolean = false;

  users:User[];

  constructor(public userService: UserService, 
              private userHttpService: UserHttpService) {

    this.users = this.userService.getUsers();
    // taditional (non-enterprise sw dev)
    // this.userService = new UserService();
  }

  onClickTestHttp() {
    this.userHttpService.getUsers()
      .subscribe((data: User[])=> {
        this.users = data;
      })
  }

  onDialogClosed(user: User) {
    if (user.id == -1) {
      // new user
      this.userService.addUser(user);
    } else {
      // existing user
      this.userService.updateUser(user);
    }

    this.showDialog = false;
  }
  onDialogCancel() {
    this.showDialog = false;
  }
  onEdit(user:User) {
    this.selectedUser = user;
    this.showDialog = true;
  }

  onAddUser() {
    this.selectedUser = new User();
    this.showDialog = true;
    //this.userService.addUser(newUser);
  }
  onClickRow(id: number) {

    console.log(`you clicked on item ${id}`);

    this.selectedUser = this.userService.getUser(id);
    console.log(this.selectedUser);
  }
  onDelete(id: number) {
    if (confirm("Are you sure?")) {
      this.userService.deleteUser(id);
    }
  }
  
}



*/


