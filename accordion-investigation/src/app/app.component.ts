import { Component } from '@angular/core';
import { AccordionItem } from './accordion-item.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <button class="btn btn-primary">Press Me</button>


    <i class="fa fa-cutlery fa-5x"></i>


    <accordion [items]="items"></accordion>
    <accordion [items]="newsItems"></accordion>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accordion investigation';

  items: AccordionItem[] = [
    new AccordionItem("Item 1", "this is item 1", true), 
    new AccordionItem("Item 2", "this is item 2", false), 
    new AccordionItem("Item 3", "this is item 3", false), 
    new AccordionItem("Item 4", "this is item 4", false)
  ];

  newsItems = [
    new AccordionItem("News Item 1", "This is news item 1", false), 
    new AccordionItem("News Item 2", "This is news item 2", false), 
    new AccordionItem("News Item 3", "This is news item 3", false), 
    new AccordionItem("News Item 4", "This is news item 4", true), 
    new AccordionItem("News Item 5", "This is news item 5", false)
  ]
}
