export default function updateUniqueItems(map) {
  if (!map || !(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of map) {
    if (!key || !value) {
      throw new Error('Cannot process');
    }
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
