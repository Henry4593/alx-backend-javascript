export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects) && arrayOfObjects.every((item) => typeof item === 'object' && item !== null)) {
    const arrayOfIds = arrayOfObjects.map((arrayObject) => arrayObject.id);
    return arrayOfIds;
  }
  return [];
}
