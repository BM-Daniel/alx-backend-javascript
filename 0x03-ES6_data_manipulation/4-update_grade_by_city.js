export default function updateStudentGradeByCity(arrayValue, city, newGrades) {
  return arrayValue.filter((value) => value.location === city)
    .map((value) => {
      const gradeValues = newGrades.filter((grade) => grade.studentId === value.id);
      return {
        ...value,
        grade: gradeValues.length ? gradeValues[0].grade : 'N/A',
      };
    });
}
