# Changelog Append

A spec for the script that adds one line to a version's changelog in a project without tickets ([Changelog Per Version](../../standards/records/changelog-per-version.md)).

## What It Does

- It appends one entry at the bottom of the page's one `## Changed` list.
- An entry is one bullet that ends in its time: ``- <what changed> `HH:MM` ``.
- It refuses a page with any section but Changed, an entry with a heading, more than one bullet, a bullet with a semicolon, and a bullet without its time.
- It refuses while a merge is in progress in the page's repository.

## The Check

- One bullet with its time is appended at the bottom.
- Two bullets, a semicolon or a missing time refuses and changes nothing.
