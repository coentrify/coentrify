// The rectangle of one frame on a sheet, for a direction and a step of the walk.
export function frameRect(sprite, direction, step) {
  return {
    x: (step % sprite.framesPerRow) * sprite.frame.width,
    y: sprite.rows[direction] * sprite.frame.height,
    width: sprite.frame.width,
    height: sprite.frame.height,
  };
}
