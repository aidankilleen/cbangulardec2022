import { Component } from '@angular/core';
import { Message } from './message/message.model';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <div><h2>This is a div</h2></div>
    <hr>
    <ul>
      <li *ngFor="let item of list">
        {{ item }}
      </li>
    </ul>
    <hr>
    <message 
      *ngFor="let message of messages" 
      [message]="message">
    </message>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Component';

  list = ["one", "two", "three", "four", "fifth"];

  messages = [
    new Message ("Msg 1", "This is msg 1", false), 
    new Message ("Msg 2", "This is msg 2", true), 
    new Message ("Msg 3", "This is msg 3", false)
  ];

  /*
  messages = [
    { title: "Message 1", text: "This is Message 1" }, 
    { title: "Message 2", text: "This is Message 2" }

  ];
  */
}
