# Track Timed Items by an Id

A list of short-lived items that each close on their own timer (floating click numbers, toasts, hints) tracks every item by its identity and removes exactly the item that closed. Tracking by index and dropping the first entry on close only holds while every item lives equally long and arrives in order.

## Why

With index tracking, removing the first entry shifts the data under the existing elements: the element made for the oldest item takes the next item's data, and the element at the end, the newest, is destroyed. An older item's timer then kills the newest element early, and a longer-lived item vanishes almost instantly.

## How to apply

- Track by an id the item carries, never by position, for anything that can leave out of order.
- Tracking by the item itself raises Angular's NG0956 whenever a short list turns over whole in one update (one closing as the next arrives on a slow page), and a suite failing on dev-mode warnings fails on it.
- On close, remove the item that closed; never shift or pop the list's end.
- When items get different lifetimes (a text staying longer than a number), check the list's removal first.
- Cover it with a case that closes an older item while a newer, longer one still shows.

## Related

- [Use Modern Angular Template APIs](use-modern-angular-template-apis.md)
