export default function getListStudentIds(arrayValue) {
  if (!Array.isArray(arrayValue)) {
    return [];
  }

  return arrayValue.map((value) => value.id);
}
