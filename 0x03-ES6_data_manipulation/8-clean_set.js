export default function cleanSet(set, startString) {
  // Validate input types and conditions
  if (typeof startString !== 'string' || !(set instanceof Set)
    || !startString || !set.size
    || [...set].every((item) => typeof item !== 'string')) {
    return '';
  }

  const startStringLength = startString.length;

  // convert the Set to an array and filter items
  const finalString = Array.from(set)
    .filter((setItem) => setItem.startsWith(startString))
    .map((setItem) => setItem.slice(startStringLength))
    .join('-');

  return finalString;
}
