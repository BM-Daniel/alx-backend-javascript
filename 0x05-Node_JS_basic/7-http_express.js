const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const args = process.argv.slice(2);
const DATABASE = args[0];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(DATABASE);

    res.send(`This is the list of our students\n${students.join('\n')}`);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});

module.exports = app;
