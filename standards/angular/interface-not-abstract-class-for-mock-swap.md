# Interface, Not Abstract Class, For Mock Swap

A real and a mock service share a TypeScript `interface` that both implement, and the app config swaps one for the other at provider time:

```ts
export interface ChildrenApi {
  getChildren(): Observable<Child[]>;
  // ...the public surface both implementations must honor
}

@Injectable()
export class ChildrenApiService implements ChildrenApi { /* real */ }

@Injectable()
export class MockChildrenApiService implements ChildrenApi { /* mock */ }

// app config - one token, swap the implementation
{ provide: ChildrenApiService, useClass: environment.useMocks ? MockChildrenApiService : ChildrenApiService }
```

## Why

The mock and the real service keep one surface, held by the compiler.

## How to Apply

- Declare an `interface` for the service's public surface and write `implements` on both `XService` and `MockXService`.
- `implements` on both sides makes the compiler enforce parity; with bare structural typing a missing method only bites at runtime.
- An interface adds no inheritance, no runtime layer and nothing to construct, which keeps the DI seam simple.
- Swap via `useClass` at the app-config layer.
- An interface is erased at runtime, so it cannot be a DI token: keep the concrete service as the token, or inject an `InjectionToken<XApi>` when there is no natural default.
- An `abstract class` port only earns its keep when several production implementations genuinely coexist, never for mock substitution.

## Related

- [Code Principles](../code/code-principles.md)
- [General Working Rules](../behavior/general-working-rules.md)
