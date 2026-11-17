import { Component, signal } from '@angular/core';
import { Section } from '../ui/section/section';
import { ORDERS, Order } from './order';
import { OrderCard } from './order-card';

@Component({
  selector: 'app-orders-page',
  imports: [OrderCard, Section],
  templateUrl: './orders-page.html',
})
export class OrdersPage {
  protected readonly orders = signal<Order[]>(ORDERS);
  protected readonly opened = signal<string | null>(null);
}
