const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const rowData = data.split('\n');
    const fieldCounts = {};
    let rowDataCount = 0;

    for (const row of rowData) {
      const trimmedRow = row.trim(); // To trim any whitespace from the row

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

    console.log(`Number of students: ${rowDataCount - 1}`);

    delete fieldCounts.field;

    for (const field of Object.keys(fieldCounts)) {
      const { count, list } = fieldCounts[field];

      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
