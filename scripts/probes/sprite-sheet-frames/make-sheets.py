#!/usr/bin/env python3
"""Draws the two sprite sheets of the fixture.

The slime is 16 by 16 per frame, with the rows down, left, right, up.
The hero is 16 by 32 per frame, with the rows up, left, down, right.
usage: make-sheets.py <assets folder>
"""
import sys
from PIL import Image

CLEAR = (0, 0, 0, 0)
SKIN = (240, 200, 160, 255)
HAIR = (90, 50, 20, 255)
EYE = (20, 20, 40, 255)
SHIRT = (200, 50, 50, 255)
PANTS = (40, 60, 140, 255)
SHOE = (30, 30, 30, 255)
SLIME = (70, 190, 90, 255)
SLIME_DARK = (40, 130, 60, 255)


def rect(image, left, top, right, bottom, color):
    for x in range(left, right + 1):
        for y in range(top, bottom + 1):
            image.putpixel((x, y), color)


def hero_frame(direction: str, step: int) -> Image.Image:
    frame = Image.new('RGBA', (16, 32), CLEAR)
    rect(frame, 4, 3, 11, 12, SKIN)
    rect(frame, 4, 2, 11, 4, HAIR)
    rect(frame, 4, 14, 11, 23, SHIRT)
    rect(frame, 5, 13, 10, 13, SKIN)
    stride = (0, 1, 0, -1)[step]
    rect(frame, 5, 24, 7, 29 + min(stride, 0), PANTS)
    rect(frame, 8, 24, 10, 29 - max(stride, 0), PANTS)
    rect(frame, 5, 30 + min(stride, 0), 7, 31 + min(stride, 0), SHOE)
    rect(frame, 8, 30 - max(stride, 0), 10, 31 - max(stride, 0), SHOE)
    if direction == 'down':
        rect(frame, 2, 15, 3, 21, SKIN)
        rect(frame, 12, 15, 13, 21, SKIN)
        frame.putpixel((6, 7), EYE)
        frame.putpixel((9, 7), EYE)
        rect(frame, 7, 10, 8, 10, EYE)
    if direction == 'up':
        rect(frame, 2, 15, 3, 21, SKIN)
        rect(frame, 12, 15, 13, 21, SKIN)
        rect(frame, 4, 2, 11, 10, HAIR)
    if direction in ('left', 'right'):
        rect(frame, 8, 2, 11, 9, HAIR)
        frame.putpixel((5, 7), EYE)
        frame.putpixel((3, 8), SKIN)
        rect(frame, 4, 10, 5, 10, EYE)
        rect(frame, 6, 16, 7, 21, SKIN)
        rect(frame, 3 - stride, 30, 4, 31, SHOE)
    if direction == 'right':
        frame = frame.transpose(Image.FLIP_LEFT_RIGHT)
    return frame


def slime_frame(direction: str, step: int) -> Image.Image:
    frame = Image.new('RGBA', (16, 16), CLEAR)
    squash = (0, 1, 2, 1)[step]
    rect(frame, 3, 6 + squash, 12, 14, SLIME)
    rect(frame, 2, 9 + squash, 13, 14, SLIME)
    rect(frame, 2, 15, 13, 15, SLIME_DARK)
    if direction == 'down':
        frame.putpixel((5, 10 + squash), EYE)
        frame.putpixel((10, 10 + squash), EYE)
    if direction in ('left', 'right'):
        frame.putpixel((4, 10 + squash), EYE)
        rect(frame, 11, 7 + squash, 12, 8 + squash, SLIME_DARK)
    if direction == 'right':
        frame = frame.transpose(Image.FLIP_LEFT_RIGHT)
    return frame


def sheet(draw, rows: tuple[str, ...], width: int, height: int) -> Image.Image:
    image = Image.new('RGBA', (width * 4, height * len(rows)), CLEAR)
    for row, direction in enumerate(rows):
        for step in range(4):
            image.paste(draw(direction, step), (step * width, row * height))
    return image


folder = sys.argv[1]
sheet(slime_frame, ('down', 'left', 'right', 'up'), 16, 16).save(f'{folder}/slime.png')
sheet(hero_frame, ('up', 'left', 'down', 'right'), 16, 32).save(f'{folder}/hero.png')
