export default function getStudentsByLocation(arrayOfObjects, location) {
  if (Array.isArray(arrayOfObjects) && arrayOfObjects.every((item) => typeof item === 'object' && item !== null)) {
    const students = arrayOfObjects.filter((arrayObject) => arrayObject.location === location);
    return students;
  }
  return [];
}
