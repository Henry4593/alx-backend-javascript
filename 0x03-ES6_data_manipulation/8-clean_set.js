export default function cleanSet(newSet, string) {
  if (typeof string !== 'string' || !(newSet instanceof Set) || string.length === 0) {
    return '';
  }
  const stringLength = string.length;
  let finalString = '';
  newSet.forEach((setItem) => {
    if (setItem.slice(0, stringLength) === string) {
      finalString += `${setItem.slice(stringLength)}-`;
    }
  });
  return finalString.slice(0, -1);
}
