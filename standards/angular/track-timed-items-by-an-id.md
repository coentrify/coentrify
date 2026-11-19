# Track Timed Items by an Id

A list of short-lived items that each close on their own timer (toasts, notifications, inline hints) tracks every item by an id the item carries.

## Why

Every item keeps its own element and its own timer.

## How to Apply

- Track by an id the item carries, never by position, for anything that can leave out of order.
- With index tracking, removing the first entry shifts the data under the existing elements: the element made for the oldest item takes the next item's data, and the element at the end, the newest, is destroyed. An older item's timer then kills the newest element early, and a longer-lived item vanishes almost instantly.
- Tracking by the item itself raises Angular's NG0956 whenever a short list turns over whole in one update (one closing as the next arrives on a slow page), and a suite failing on dev-mode warnings fails on it.

## Related

- [Use Modern Angular Template APIs](use-modern-angular-template-apis.md)
