# Interceptor Ordering

HTTP interceptors that catch errors must wrap any interceptor that throws errors. A catcher only sees errors from `next.handle()` below it in the chain.

## Why

In a chain `[A, B, C]` registered in that order, A wraps B wraps C; if B short-circuits with `throwError`, the error bubbles up to A, C never sees the request, and a catcher placed at C is dead code. A typical victim is a mock chain where one interceptor returns canned 401/403 responses and another should log off and redirect on auth errors: the redirect never fires, and the cause is invisible without tracing the chain.

## How to apply

- When a chain mixes throwing and catching interceptors, write the wrap order down: outermost first, innermost last.
- Verify by running one failing-path test. If the catcher's side effect (redirect, logoff, retry) doesn't fire, the chain order is the suspect - reorder rather than working around it in the source.
- Mock chains and real chains can have different shapes; mirror the catch-wraps-source structure in both, or the real auth path masks a bug that only the mock can surface.
