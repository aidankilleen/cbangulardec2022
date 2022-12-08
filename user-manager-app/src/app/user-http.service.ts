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
}
