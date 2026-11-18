# No Magic Values

No magic strings or numbers in code. Any literal that is used more than once, or that *could* be used elsewhere, must be hoisted into a named constant. Applies to numbers too - `APP_BOOT_TIMEOUT` over `15_000` inline, even at a single call site, because the name carries the meaning.

## Why

A name carries the meaning a literal cannot.

## How to Apply

- A constant is reused, edited in one place, and found by the IDE at every call site.
- A test names the same constant, so an e2e spec stays in sync with the scenario keys it targets.

## TypeScript Pattern

For sets of related string values, use the `as const` object + `Enum<T>` type pattern. Do **not** use the TypeScript `enum` keyword for new code - it generates runtime output, blocks pure type imports, and has type/value collision that makes it painful to import. The pattern keeps what an `enum` offers: autocomplete, and an exhaustive switch through the union type.

```ts
// constants/<name>.const.ts
export const SortOrder = {
  Ascending: 'asc',
  Descending: 'desc',
} as const;

// types/<name>.type.ts
export type SortOrderType = Enum<typeof SortOrder>;
```

`Enum<T>` is the generic `type Enum<T> = T[keyof T]`. Define it once in the core layer and import from there.

For a single scalar constant (not a set), annotate the type explicitly with `: Readonly<T> =`, not `as const` - e.g. `export const BOT_USER_EMAIL: Readonly<string> = '...';` or `const DEFAULT_LIMIT: Readonly<number> = 50;`. `as const` is reserved for the object that backs a union via `Enum<T>`.

## Folder Layout

- `constants/` for `*.const.ts`.
- `types/` for `*.type.ts`.
- `generics/` for type-only utilities like `Enum<T>`.
- Each folder has its own `index.ts` re-exporting siblings; the lib's top-level `index.ts` re-exports each subfolder.

## Exceptions

HTML template binding into a typed component input, where the literal is validated at compile time:

```html
<some-button variant="cta">           <!-- fine, `variant` is typed -->
```

This is fine *because* `<some-button>` defines its accepted variants as a const + `Enum<T>` type and binds `variant` to that type. The component itself is **not** exempt - it must own its variant const, never an inline string union or hardcoded list.

## Related

- [App-Shield](../architecture/app-shield.md)
