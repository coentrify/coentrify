# Static Attribute, Not Literal Binding

A constant string value is a plain template attribute (`aria-label="Menu"`), never a binding wrapping a string literal (`[attr.aria-label]="'Menu'"`, `[label]="'Menu'"`). Applies to attribute bindings and component-input bindings alike.

Dynamic values still need the binding: signals, `t(...)` translations, ternaries.

```html
<!-- avoid -->
<button [attr.aria-label]="'Menu'"></button>
<!-- prefer -->
<button aria-label="Menu"></button>
<!-- binding is correct when the value is dynamic -->
<button [attr.aria-label]="t('layout.menu')"></button>
```

## Why

The binding form exists for values that change. A literal never changes, so the binding is pure change-detection overhead and indirection, and it misleads readers into thinking the value is computed.

## Related

- [UI Copy in Template](ui-copy-in-template.md)
- [No `$any` in Templates](no-any-in-templates.md)
