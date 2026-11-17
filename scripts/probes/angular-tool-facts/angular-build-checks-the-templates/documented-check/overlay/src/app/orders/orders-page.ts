import { Component, computed, signal } from '@angular/core';
import { ContactLine } from '../ui/contact-line/contact-line';
import { Section } from '../ui/section/section';
import { ORDERS, Order } from './order';
import { OrderCard } from './order-card';

@Component({
  selector: 'app-orders-page',
  imports: [ContactLine, OrderCard, Section],
  templateUrl: './orders-page.html',
  styleUrl: './orders-page.scss',
})
export class OrdersPage {
  protected readonly orders = signal<Order[]>([...ORDERS].sort((left, right) => left.customer.localeCompare(right.customer)));
  protected readonly opened = signal<string | null>(null);
  protected readonly largest = computed(() => this.orders().reduce((best, order) => (order.total > best.total ? order : best)));
}
