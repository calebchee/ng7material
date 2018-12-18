import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-benefits-table',
  templateUrl: './benefits-table.component.html',
  styleUrls: ['./benefits-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class BenefitsTableComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['title', 'plan1', 'plan2', 'plan3'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
  title: string;
  plan1: string;
  plan2: string;
  plan3: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Overseas Medical Expenses',
    plan1: '150,000',
    plan2: '50,000',
    plan3: '50,000',
    description: 'Sub-contents here'
  }, {
    title: 'Emergency Overseas Travel Expenses',
    plan1: '350,000',
    plan2: '250,000',
    plan3: '150,000',
    description: 'Sub-contents here'

  }, {
    title: 'Chubb Assistance',
    plan1: 'Unlimited',
    plan2: '150,000',
    plan3: '100,000',
    description: 'Sub-contents here'

  },
];
