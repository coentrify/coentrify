import { Component } from '@angular/core';
import { OrdersPage } from './orders/orders-page';
import { ReturnsPage } from './returns/returns-page';

@Component({
  selector: 'app-root',
  imports: [OrdersPage, ReturnsPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
