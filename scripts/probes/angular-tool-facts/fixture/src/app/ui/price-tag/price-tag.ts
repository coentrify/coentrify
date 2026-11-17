import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-price-tag',
  imports: [CurrencyPipe, NgClass, NgIf],
  templateUrl: './price-tag.html',
  styleUrl: './price-tag.scss',
})
export class PriceTag {
  readonly amount = input.required<number>();
  readonly discounted = input(false);
}
