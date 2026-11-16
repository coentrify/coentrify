# Invoice Kit

Totals, tax and due dates for invoices.

## Formatting Money

`formatMoney` from `src/money.js` rounds half up to two digits and puts the currency symbol in front.

```js
import { formatMoney } from 'invoice-kit/money';

formatMoney(104.099, 'EUR'); // '€104.10'
```
