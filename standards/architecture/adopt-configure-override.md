# Adopt, Configure, Override

Anything made to be reused across projects comes in three layers. A project adopts the defaults, configures where it differs, and overrides where it wants something of its own.

- Defaults: it just works. Adopting asks for no choices, and out of the box it does everything it finds relevant.
- Configs: choose your flavors. The named choices the thing offers, picked where projects truly differ.
- Overrides: customization. What a project changes for itself, past the choices on offer.

## Why

Reuse costs the least code and time.

## How to Apply

- A default just works, a flavor is thought out beforehand and easy to pick, and an override is there for the custom case and the escape hatch, only when needed.
- The default path asks nothing. The person is involved only for a decision that is really theirs.
- A choice becomes a config only once projects truly differ on it; until then it is a default.
- Each layer has a place of its own. A default is never edited to configure or to override, which keeps an update of the defaults mechanical.
- An override may drift for good. Offering one back to the source is the exception, kept for what clearly holds in general.
- It applies to a library, a design system's tokens, a set of rules and a project template alike.

## Related

- [Game Design Laws](../gamedev/game-design-laws.md)
- [Converge Only Once Proven](converge-only-once-proven.md)
