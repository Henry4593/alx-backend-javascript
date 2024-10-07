export default function getStudentIdsSum(arrayOfObjects) {
  // Check if the input is a valid array of objects
  if (!Array.isArray(arrayOfObjects) || !arrayOfObjects.every((item) => typeof item === 'object' && item !== null)) {
    return 0;
  }

  // Use reduce to sum the IDs, converting them to numbers
  return arrayOfObjects.reduce((acc, { id }) => acc + Number(id), 0);
}
