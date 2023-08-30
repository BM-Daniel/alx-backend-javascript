export default function getStudentIdsSum(arrayValue) {
  const initialValue = 0;

  return arrayValue.reduce((total, currentValue) => total + currentValue.id, initialValue);
}
