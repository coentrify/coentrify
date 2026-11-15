# Sprite Sheet Frames

Before a sheet is sliced into frames, the frame size and the row order are
read from the pixels, never assumed from the tile size or a preview at a
glance: print the alpha mask of the first cell, or render the sheet with
a labeled grid, and check where a character's feet land and which way
each row faces.

## Why

A 16 by 32 character sheet sliced at the 16 pixel tile size shows every
character as a head only, and side rows read backwards from a small
preview make a character walk the wrong way. Both slip through when the
frame is assumed instead of read.

## How to apply

- Render the sheet with the grid labeler (columns and rows numbered) at
  a zoom where a single frame fills the view, and print the alpha mask
  of one cell to see the frame's true height.
- Confirm each direction row by the face and the feet, never by the order
  such sheets usually have.
- Put the frame size and the row map in one constant next to the loader,
  and check a capture of a walking character before the version closes.

## Related

- [Review Every Capture Before Reporting](../behavior/review-every-capture-before-reporting.md)
- [Browser Captures Go To Disk](../tooling/browser-captures-go-to-disk.md)
