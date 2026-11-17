import { Component, input } from '@angular/core';

export interface Contact {
  id: string;
  customer: string;
}

@Component({
  selector: 'app-contact-line',
  templateUrl: './contact-line.html',
  styleUrl: './contact-line.scss',
})
export class ContactLine {
  readonly contact = input.required<Contact>();
}
