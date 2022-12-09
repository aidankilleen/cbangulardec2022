import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user.model';
import { UserHttpService } from '../user-http.service';
import { UserModalAngularBootstrapComponent } from '../user-modal-angular-bootstrap/user-modal-angular-bootstrap.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  selectedUser: User | undefined = new User();
  showDialog: boolean = false;

  users:User[] = [];

  constructor(public userService: UserService, 
              private userHttpService: UserHttpService, 
              private modalService: NgbModal) {

    //this.users = this.userService.getUsers();
    // taditional (non-enterprise sw dev)
    // this.userService = new UserService();
  }
  ngOnInit(): void {
    this.userHttpService.getUsers()
    .subscribe((data: User[])=> {
      this.users = data;
    })
  }

  onDialogClosed(user: User) {
    if (user.id == -1) {
      // new user
      this.userHttpService.addUser(user)
        .subscribe(addedUser => {
          this.users.push(addedUser);
        })
    } else {
      // existing user
      this.userHttpService.updateUser(user)
        .subscribe(updatedUser => {
          let index = this.users.findIndex(user=>user.id == updatedUser.id);
          this.users.splice(index, 1, updatedUser);
        });
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
    //this.showDialog = true;
    //this.userService.addUser(newUser);

    this.modalService.open(UserModalAngularBootstrapComponent)
      .result.then(
        (userToAdd)=>{
          this.onDialogClosed(userToAdd);
        }, 
        (reason) => {
          alert(reason);
        }
      );
  }
  onClickRow(id: number) {

    console.log(`you clicked on item ${id}`);

    this.userHttpService.getUser(id)
      .subscribe((user:User)=> {
        this.selectedUser = user;
        console.log(this.selectedUser);

      })
  }
  onDelete(id: number) {
    if (confirm("Are you sure?")) {
      this.userHttpService.deleteUser(id)
        .subscribe(()=>{
          let index = this.users.findIndex(user => user.id == id);
          this.users.splice(index, 1);
        });
    }
  }

}
