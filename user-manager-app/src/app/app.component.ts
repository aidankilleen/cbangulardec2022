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
    <hr>
    {{ selectedUser | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user manager app';

  selectedUser: User | undefined;

  users:User[];

  constructor(public userService: UserService) {

    this.users = this.userService.getUsers();
    // taditional (non-enterprise sw dev)
    // this.userService = new UserService();
  }

  onTestUpdate() {
    //this.selectedUser!.name = "CHANGED";

    let userToChange = new User(3, "CHANGED", "changed@gmail.com", true);
    this.userService.updateUser(userToChange);

  }
  onAddUser() {
    let newUser = new User(-1, "NEW USER", "new.user@gmail.com");
    this.userService.addUser(newUser);
  }
  onClickRow(id: number) {
    this.selectedUser = this.userService.getUser(id);
  }
  onDelete(id: number) {
    if (confirm("Are you sure?")) {
      this.userService.deleteUser(id);
    }
  }
  
}
