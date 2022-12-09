import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[] = [
    {
      "id": 1,
      "name": "Zoe",
      "email": "alice@gmail.com",
      "active": false
    },
    {
      "id": 2,
      "name": "Yvonne",
      "email": "yvonne@gmail.com",
      "active": true
    },
    {
      "id": 3,
      "name": "Xavier",
      "email": "xavier@gmail.com",
      "active": false
    },
    {
      "id": 4,
      "name": "Wendy",
      "email": "wendy@gmail.com",
      "active": true
    },
    {
      "id": 5,
      "name": "Vera",
      "email": "vera@gmail.com",
      "active": true
    }
  ];
  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | undefined {

    let u = this.users.find(user => user.id == id);
    return u;
  }
}
