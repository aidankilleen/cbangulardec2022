import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail-page',
  template: `
    <h2>User Detail</h2>
    
    <table>
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
        <td>Active:</td><td>{{ user!.active ? 'Active' : 'Inactive' }}</td>
      </tr>
    </table>

  `,
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  id: number = -1;
  user?: User;

  constructor(private route: ActivatedRoute, 
              private userService: UserService) {

  }
  ngOnInit(): void {
    
    this.route.params.subscribe(data => {
      console.log(data);

      this.id = parseInt(data['id']);

      this.user = this.userService.getUser(this.id);
    })
  }
  


}
