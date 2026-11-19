# Static Attribute, Not Literal Binding

A constant string value is a plain template attribute (`aria-label="Menu"`), never a binding wrapping a string literal (`[attr.aria-label]="'Menu'"`, `[label]="'Menu'"`). Applies to attribute bindings and component-input bindings alike.

Dynamic values still need the binding: signals, `t(...)` translations, ternaries. A literal never changes, so a binding around it is pure change-detection overhead and indirection.

```html
<!-- avoid -->
<button [attr.aria-label]="'Menu'"></button>
<!-- prefer -->
<button aria-label="Menu"></button>
<!-- binding is correct when the value is dynamic -->
<button [attr.aria-label]="t('layout.menu')"></button>
```

## Why

A binding tells the reader that a value changes.

## Related

- [UI Copy In Template](ui-copy-in-template.md)
- [No `$any` In Templates](no-any-in-templates.md)
