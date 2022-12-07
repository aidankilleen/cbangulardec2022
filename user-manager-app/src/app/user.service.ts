import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User (1, "Alice", "alice@gmail.com", false), 
    new User (2, "Bob", "bob@gmail.com", true), 
    new User (3, "Carol", "carol@gmail.com", true), 
    new User (4, "Dan", "dan@gmail.com", false), 
    new User (5, "Eve", "eve@gmail.com", true)
  ];
  constructor() { }

  getUsers():User[] {
    return this.users;
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id == id);
  }

  deleteUser(id: number) {
    let index = this.users.findIndex(user=>user.id == id);
    this.users.splice(index, 1);
  }

  addUser(userToAdd: User): User {

    let maxId = this.users.length > 1 ? this.users[0].id : 0;
    for (let i=1; i< this.users.length; i++) {
      maxId = maxId < this.users[i].id ? this.users[i].id : maxId; 
    }

    userToAdd.id = maxId + 1;

    this.users.push(userToAdd);
    return userToAdd;
  }

  updateUser(userToUpdate: User): User {

    let index = this.users.findIndex(user => user.id == userToUpdate.id);
    this.users.splice(index, 1, userToUpdate);
    return userToUpdate;
  }
}
