import { Component, Input } from '@angular/core';
import { AccordionItem } from '../accordion-item.model';


@Component({
  selector: 'accordion',
  template: `
    <div>
      <accordion-panel 
        *ngFor="let item of items"
        [item]="item"
        (expanded)="onExpanded($event)"
        >
      </accordion-panel>
    </div>
    <!--
    <hr>
    {{ items | json }}
    -->
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() items: AccordionItem[] = [];

  onExpanded(expandedItem: AccordionItem) {
    //alert(JSON.stringify(expandedItem));

    //this.items.forEach()

    for (let i=0; i<this.items.length; i++) {

      if (this.items[i] != expandedItem) {
        this.items[i].expanded = false;
      }
    }
  }
}
