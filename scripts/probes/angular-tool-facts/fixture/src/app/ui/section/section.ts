import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Section {
  readonly title = input.required<string>();
}
