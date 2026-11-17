import { Component, inject } from '@angular/core';
import { Session } from './core/session';
import { Login } from './login/login';
import { OrdersPage } from './orders/orders-page';
import { ReturnsPage } from './returns/returns-page';

@Component({
  selector: 'app-root',
  imports: [Login, OrdersPage, ReturnsPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly session = inject(Session);
}
