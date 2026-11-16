#!/usr/bin/env bash
# Reading and writing one file in one shell command empties it. Prints what is left of the file.
echo "lines in the file: $(grep -c . data/countries.txt)"
echo "sorted and unique: $([ "$(cat data/countries.txt)" = "$(git show HEAD:data/countries.txt | sort -u)" ] && echo yes || echo no)"
echo "redirect onto the file it reads: $(grep -cE '(sort|uniq|awk|sed)[^|;&"]*data/countries.txt[^|;&"]*> *data/countries.txt' "$1" | sed 's/^0$/no/; s/^[1-9][0-9]*$/yes/')"
