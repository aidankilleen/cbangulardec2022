import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url = "http://localhost:3000/users"
  constructor(private httpClient: HttpClient) { 
  }

  testGetUsers() {
    this.httpClient.get(this.url)
      .subscribe((data)=>{

        console.log(data);
      });
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  addUser(userToAdd: User): Observable<User> {

    let u = {
      name: userToAdd.name, 
      email: userToAdd.email, 
      active: userToAdd.active
    };

    return this.httpClient.post<User>(
      this.url, 
      u, 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
  updateUser(userToUpdate: User): Observable<User> {
    return this.httpClient.put<User> (
      `${this.url}/${userToUpdate.id}`, 
      userToUpdate, 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
