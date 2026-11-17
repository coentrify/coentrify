import { Component, signal } from '@angular/core';
import { Badge } from '../ui/badge/badge';
import { Section } from '../ui/section/section';

interface ReturnRequest {
  id: string;
  reason: string;
}

@Component({
  selector: 'app-returns-page',
  imports: [Badge, Section],
  templateUrl: './returns-page.html',
  styleUrl: './returns-page.scss',
})
export class ReturnsPage {
  protected readonly returns = signal<ReturnRequest[]>([]);
}
