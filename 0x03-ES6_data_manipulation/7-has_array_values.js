export default function hasValuesFromArray(newSet, newArray) {
  // Validate input types
  if (!(newSet instanceof Set) || !(newArray instanceof Array)) {
    throw new TypeError('Invalid input types: expected a Set and an Array.');
  }

  // Check if every item in newArray exists in newSet
  return newArray.every((arrayItem) => newSet.has(arrayItem));
}
