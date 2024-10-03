import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const objArray = [];
  const sizes = [19, 20, 34];
  for (const size of sizes) {
    objArray.push(new ClassRoom(size));
  }
  return objArray;
}
