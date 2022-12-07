import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <button (click)="onAddUser()">
      Add User
    </button>

    <button (click)="onTestUpdate()">
      Test Update
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
          </td>
        </tr>
      </tbody>

    </table>

    <user [user]="selectedUser" (userChange)="onUserChange($event)"></user>

    <hr>
    {{ selectedUser | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user manager app';

  selectedUser: User | undefined = new User();

  users:User[];

  constructor(public userService: UserService) {

    this.users = this.userService.getUsers();
    // taditional (non-enterprise sw dev)
    // this.userService = new UserService();
  }

  onUserChange(changedUser: User) {

    if (changedUser.id == -1) {
      // this is an add
      this.selectedUser = this.userService.addUser(changedUser);

    } else {
      // this is an update
      this.userService.updateUser(changedUser);
      this.selectedUser = changedUser;
    }
  }
  onTestUpdate() {
    //this.selectedUser!.name = "CHANGED";

    let userToChange = new User(3, "CHANGED", "changed@gmail.com", true);
    this.userService.updateUser(userToChange);

  }
  onAddUser() {
    this.selectedUser = new User();

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
