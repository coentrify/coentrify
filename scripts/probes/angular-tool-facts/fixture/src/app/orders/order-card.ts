import { Component, input, output } from '@angular/core';
import { Badge } from '../ui/badge/badge';
import { Card } from '../ui/card/card';
import { PriceTag } from '../ui/price-tag/price-tag';
import { Order } from './order';

@Component({
  selector: 'app-order-card',
  imports: [Badge, Card, PriceTag],
  templateUrl: './order-card.html',
  styleUrl: './order-card.scss',
})
export class OrderCard {
  readonly order = input.required<Order>();
  readonly details = output<string>();
}
