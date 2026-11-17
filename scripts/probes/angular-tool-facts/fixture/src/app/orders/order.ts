export type OrderStatus = 'open' | 'paid' | 'late';

export interface Order {
  id: string;
  customer: string;
  total: number;
  discounted: boolean;
  quantity: number;
  status: OrderStatus;
}

export const ORDERS: Order[] = [
  { id: 'A-1041', customer: 'Noor Haddad', total: 59.5, discounted: false, quantity: 14, status: 'paid' },
  { id: 'A-1042', customer: 'Jonas Berg', total: 12, discounted: true, quantity: 3, status: 'open' },
  { id: 'A-1043', customer: 'Mei Tanaka', total: 240, discounted: false, quantity: 0, status: 'late' },
];
