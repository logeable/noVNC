export function makeColorFrom16Pixel(pixel, context) {
  let color = pixel[0] + (pixel[1] << 8)
  let r24 = (color >> context.redShift) & context.redMax;
  let g24 = (color >> context.greenShift) & context.greenMax;
  let b24 = (color >> context.blueShift) & context.blueMax;
  r24 *= 255 / (context.redMax + 1);
  g24 *= 255 / (context.greenMax + 1);
  b24 *= 255 / (context.blueMax + 1);

  r24 = Math.ceil(r24);
  g24 = Math.ceil(g24);
  b24 = Math.ceil(b24);
  return [b24, g24, r24, 255]
}