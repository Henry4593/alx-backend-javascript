export default function getListStudents() {
  const ids = [1, 2, 5];
  const firstNames = ['Guillaume', 'James', 'Serena'];
  const locations = ['San Francisco', 'Columbia', 'San Francisco'];
  const arrayOfObjects = [];
  for (let idx = 0; idx < ids.length; idx += 1) {
    const person = {
      id: ids[idx],
      firstName: firstNames[idx],
      location: locations[idx],
    };
    arrayOfObjects.push(person);
  }
  return arrayOfObjects;
}
