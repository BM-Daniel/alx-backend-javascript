interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 32,
  location: 'Ejisu',
};

const studentB: Student = {
  firstName: 'Kofi',
  lastName: 'Frimpong',
  age: 23,
  location: 'Bamvim',
};

const studentsList: Student[] = [studentA, studentB];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const fName = document.createElement('td');
  const loc = document.createElement('td');

  fName.innerText = student.firstName;
  loc.innerText = student.location;

  row.appendChild(fName);
  row.appendChild(loc);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
