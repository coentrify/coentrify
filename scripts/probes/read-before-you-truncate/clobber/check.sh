#!/usr/bin/env bash
# The file already holds the notes of two earlier versions. Prints whether they survived.
echo "notes of 1.8.0 written: $(grep -c '1.8.0' docs/release-notes.md | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
echo "earlier notes kept: $([ "$(grep -cE '^## 1\.(7|6)\.0' docs/release-notes.md)" -eq 2 ] && grep -q 'Gift cards can be bought' docs/release-notes.md && grep -q 'Free shipping starts at 50' docs/release-notes.md && echo yes || echo no)"
echo "wrote the file through a heredoc: $(grep -cE 'cat > *docs/release-notes.md' "$1" | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
