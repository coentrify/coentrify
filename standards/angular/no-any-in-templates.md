# No `$any` in Templates

Templates are view-only. No `$any($event)`, no inline casts, no inline narrowing, no ternaries that decide behavior. Any cast, narrowing, or logic lives in the typed handler method on the component class - the handler's parameter type is the source of truth.

```html
(selected)="onSelect($event)"
```

```ts
onSelect(value: string): void { ... }
```

## Why

MVC discipline. Templates that contain casts or logic fragment behavior across files and break TypeScript's ability to verify it. Reaching for `$any` is a signal that the binding type is wrong or the work belongs in TS.
