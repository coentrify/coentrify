# Adopt, Configure, Override

Anything made to be reused across projects comes in three layers. A project adopts the defaults, configures where it differs, and overrides where it wants something of its own.

- Defaults: it just works. Adopting asks for no choices, and out of the box it does everything it finds relevant.
- Configs: choose your flavors. The named choices the thing offers, picked where projects truly differ.
- Overrides: customization. What a project changes for itself, past the choices on offer.

## Why

A person's time is the bottleneck, so a default that asks questions costs every project that adopts it. Configs keep the common differences cheap. Overrides let a project run ahead without waiting for the source to change.

## How to apply

- The default path asks nothing. The person is involved only for a decision that is really theirs.
- A choice becomes a config only once projects truly differ on it; until then it is a default.
- Each layer has a place of its own. A default is never edited to configure or to override, which keeps an update of the defaults mechanical.
- An override may drift for good. Offering one back to the source is the exception, kept for what clearly holds in general.
- It applies to a library, a design system's tokens, a set of rules and a project template alike.

## Related

- [Game Design Laws](../gamedev/game-design-laws.md)
- [Converge Only Once Proven](converge-only-once-proven.md)
