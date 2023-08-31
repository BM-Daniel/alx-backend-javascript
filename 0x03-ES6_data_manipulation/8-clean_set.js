export default function cleanSet(set, startString) {
  let concat = '';

  if (!startString || startString.length === 0) {
    return concat;
  }

  for (const value of set) {
    if (value && value.startsWith(startString)) {
      concat += `${value.slice(startString.length)}-`;
    }
  }

  return concat.slice(0, concat.length - 1);
}
