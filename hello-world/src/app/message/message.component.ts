import { Component, Input } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'message',
  template: `
    <div 
      (click) = "onClick()"
      [ngClass]="{ 'important': message.important }"
    >
      <strong *ngIf="message.important">***IMPORTANT***</strong>
      <h2>{{ message.title }}</h2>
      <p *ngIf="!read">{{ message.text }}</p>
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() message: Message = new Message("", "", false);

  read: boolean = false;

  onClick() {
    this.read = !this.read;
  }

  /*
  @Input() title = "Message Component";
  @Input() text = "This is a message";
  */
}
