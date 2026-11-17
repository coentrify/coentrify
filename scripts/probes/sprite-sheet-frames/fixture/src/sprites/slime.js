import { TILE_SIZE } from '../config.js';

export const slime = {
  image: 'assets/slime.png',
  frame: { width: TILE_SIZE, height: TILE_SIZE },
  framesPerRow: 4,
  rows: { down: 0, left: 1, right: 2, up: 3 },
};
