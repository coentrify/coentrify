import { Component, inject, signal } from '@angular/core';
import { Section } from '../ui/section/section';
import { Order } from './order';
import { OrderCard } from './order-card';
import { OrdersApi } from './orders-api';

@Component({
  selector: 'app-orders-page',
  imports: [OrderCard, Section],
  templateUrl: './orders-page.html',
})
export class OrdersPage {
  protected readonly orders = signal<Order[]>([]);
  protected readonly failed = signal(false);
  protected readonly opened = signal<string | null>(null);

  constructor() {
    inject(OrdersApi)
      .orders()
      .subscribe({
        next: (orders) => this.orders.set(orders),
        error: () => this.failed.set(true),
      });
  }
}
