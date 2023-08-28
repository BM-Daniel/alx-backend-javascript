import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const numbers = [19, 20, 34];

  return numbers.map((num) => new ClassRoom(num));
}
