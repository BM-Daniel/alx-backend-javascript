export default function updateUniqueItems(mapValue) {
  if (!(mapValue instanceof Map)) {
    throw new Error('Cannot process');
  }

  mapValue.forEach((value, key) => {
    if (value === 1) {
      mapValue.set(key, 100);
    }
  });
}
