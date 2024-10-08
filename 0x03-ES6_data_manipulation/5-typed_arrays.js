export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number'
    || typeof position !== 'number'
    || typeof value !== 'number') {
    throw new TypeError();
  }
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
