import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccordionItem } from '../accordion-item.model';

@Component({
  selector: 'accordion-panel',
  template: `
    <div 
      (click)="onClick()"
      [ngStyle]="{'border': (item.expanded ? '1px solid black' : 'none')}"  
    >
      <h2 [ngClass]="{ 'expanded': item.expanded }">{{ item.title }}</h2>
      <p *ngIf="item.expanded">{{ item.content }}</p>
    </div>
  `,
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent {

  @Input() item: AccordionItem = new AccordionItem("","",false);
  @Output() expanded = new EventEmitter();

  onClick() {
    this.item.expanded = !this.item.expanded;

    this.expanded.emit(this.item);
  }
}
