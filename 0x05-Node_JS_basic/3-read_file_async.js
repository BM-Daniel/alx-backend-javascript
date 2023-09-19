const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.promises.readFile(filePath, 'utf8')
      .then((data) => {
        const rowData = data.split('\n');
        const fieldCounts = {};
        let rowDataCount = 0;

        for (const row of rowData) {
          const trimmedRow = row.trim();

          if (trimmedRow === '');

          rowDataCount += 1;

          const columns = trimmedRow.split(',');
          const field = columns[columns.length - 1];

          if (!fieldCounts[field]) {
            fieldCounts[field] = {
              count: 0,
              list: [],
            };
          }

          fieldCounts[field].count += 1;
          fieldCounts[field].list.push(columns[0]);
        }

        const totalStudents = rowDataCount - 1;

        console.log(`Number of students: ${totalStudents}`);

        delete fieldCounts.field;

        for (const field of Object.keys(fieldCounts)) {
          const { count, list } = fieldCounts[field];
          console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        }

        resolve(totalStudents);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
