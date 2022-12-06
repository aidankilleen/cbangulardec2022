import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>User Component Investigation</h1>

  <user [user]="user"></user>

  <hr>
  {{ user | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = new User(1, "Alice", "alice@gmail.com", false);

}
