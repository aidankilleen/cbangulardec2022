import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'user-modal',
  template: `
  <div id="myModal" 
    class="modal" 
    [ngStyle]="{'display': display ? 'block' : 'none'}"
>

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>

      <label>Id</label>
      <input [value]= "editingUser!.id" readonly><br>
      <label>Name</label>
      <input [(ngModel)]="editingUser!.name"><br>
      <label>Email</label>
      <input [(ngModel)]="editingUser!.email"><br>
      <label>Active</label>
      <input type="checkbox" [(ngModel)]="editingUser!.active"><br>

      <button (click)="onOkClick()">Ok</button>
      <button (click)="onCancelClick()">Cancel</button>
    </div>
  </div>
  `,
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.editingUser = new User(this.user?.id, 
      this.user?.name, 
      this.user?.email, 
      this.user?.active);
  }

  @Input() display: boolean = false;
  @Input() user:User | undefined = new User();
  editingUser:User = new User();

  @Output() closed = new EventEmitter();
  @Output() cancel = new EventEmitter();

  onClickBackground() {
    //this.display = false;
    this.closed.emit();
  }
  onOkClick() {
    this.closed.emit(this.editingUser);
  }
  onCancelClick() {
    this.cancel.emit();
  }
}
