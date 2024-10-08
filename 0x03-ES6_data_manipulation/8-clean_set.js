export default function cleanSet(set, startString) {
  // Validate input types and conditions
  if (!(set instanceof Set) || typeof startString !== 'string'
    || !startString || !set.size) {
    return '';
  }

  const startStringLength = startString.length;

  // Filter and map the set items
  const finalString = Array.from(set)
    .filter((setItem) => typeof setItem === 'string'
    && setItem.startsWith(startString))
    .map((setItem) => setItem.substring(startStringLength))
    .filter((substring) => substring) // Remove empty substrings
    .join('-');

  return finalString;
}
