export default function getStudentsByLocation(arrayValue, searchValue) {
  return arrayValue.filter((value) => value.location === searchValue);
}
