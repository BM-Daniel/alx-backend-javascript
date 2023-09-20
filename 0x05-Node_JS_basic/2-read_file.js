const fs = require('fs');

function countStudents(filePath) {
  let data;

  try {
    data = fs.readFileSync(filePath);
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  data = data.toString().split('\n');

  let students = data.filter((value) => value);

  students = students.map((value) => value.split(','));

  const numberOfStudents = students.length ? students.length - 1 : 0;

  console.log(`Number of students: ${numberOfStudents}`);

  const fields = {};

  for (const student in students) {
    if (student !== 0) {
      if (!fields[students[student][3]]) {
        fields[students[student][3]] = [];
      }

      fields[students[student][3]].push(students[student][0]);
    }
  }

  delete fields.field;

  for (const key of Object.keys(fields)) {
    console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
  }
}

module.exports = countStudents;
