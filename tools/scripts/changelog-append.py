import os, re, subprocess, sys
# usage: cl.py <changelog.md> <block file>
# Appends one entry at the very bottom of the page's one Changed list.
# Refuses: a pick in progress in the page's repo, a page with any section but Changed, a block with a heading,
# a bullet with a semicolon, more than one bullet per block, a bullet without its `HH:MM` stamp.
p, b = sys.argv[1], sys.argv[2]
git_dir = subprocess.run(['git', 'rev-parse', '--absolute-git-dir'], cwd=os.path.dirname(os.path.abspath(p)),
                         capture_output=True, text=True).stdout.strip()
if git_dir and os.path.exists(os.path.join(git_dir, 'CHERRY_PICK_HEAD')):
    sys.exit('refused: a pick is in progress, the tree is half merged')
page = open(p).read()
block = open(b).read().strip('\n')
heads = re.findall(r'^## .*$', page, re.M)
if heads != ['## Changed']:
    sys.exit(f'refused: the page holds {heads}, only one ## Changed is allowed')
if re.search(r'^#', block, re.M):
    sys.exit('refused: a heading in the block')
bullets = [l for l in block.split('\n') if l.startswith('- ')]
if len(bullets) != 1:
    sys.exit(f'refused: {len(bullets)} bullets, one per append')
if ';' in bullets[0]:
    sys.exit('refused: a semicolon chains two items, split them into separate appends')
if not re.search(r'`\d\d:\d\d`$', bullets[0]):
    sys.exit('refused: the bullet ends without its `HH:MM` stamp')
open(p, 'w').write(page.rstrip('\n') + '\n\n' + block + '\n')
print('appended at the bottom')
