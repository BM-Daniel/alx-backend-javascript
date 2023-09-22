const fs = require('fs');

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(err));
        return;
      }

      const content = data.toString().split('\n');
      let students = content.filter((value) => value);

      students = students.map((value) => value.split(','));

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

      resolve(fields);
    });
  });
}
