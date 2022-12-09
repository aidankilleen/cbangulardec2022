import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user.model';

@Component({
  selector: 'user-modal-angular-bootstrap',
  template: `

      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body">
        
          <label>Id</label>
          <input [value]= "editingUser!.id" readonly><br>
          <label>Name</label>
          <input [(ngModel)]="editingUser!.name"><br>
          <label>Email</label>
          <input [(ngModel)]="editingUser!.email"><br>
          <label>Active</label>
          <input type="checkbox" [(ngModel)]="editingUser!.active"><br>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="activeModal.close(editingUser)">Save</button>
      </div>
      {{ editingUser | json }}

  `,
  styleUrls: ['./user-modal-angular-bootstrap.component.css']
})
export class UserModalAngularBootstrapComponent {


  @Input() user:User | undefined = new User();
  editingUser:User = new User();

  constructor(public activeModal: NgbActiveModal) {

  }
}
