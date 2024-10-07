export default function setFromArray(arrayData) {
  if (!Array.isArray(arrayData)) {
    return new Set();
  }
  return new Set(arrayData);
}
