# No `$any` In Templates

Templates are view-only. No `$any($event)`, no inline casts, no inline narrowing, no ternaries that decide behavior. Any cast, narrowing, or logic lives in the typed handler method on the component class - the handler's parameter type is the source of truth.

```html
(selected)="onSelect($event)"
```

```ts
onSelect(value: string): void { ... }
```

## Why

MVC discipline: the template shows, and the typed class decides.

## How To Apply

- When a binding seems to need `$any`, fix the binding type or move the work into TS.
- A template that holds casts or logic fragments behavior across files, and TypeScript can no longer verify it.

## Related

- [App-Shield](../architecture/app-shield.md)
- [Static Attribute, Not Literal Binding](static-attribute-not-literal-binding.md)
