export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(stdName) {
    if (typeof stdName !== 'string') {
      throw new Error('Name must be a string');
    }

    this._name = stdName;
  }

  get length() {
    return this._length;
  }

  set length(stdLength) {
    if (typeof stdLength !== 'number') {
      throw new Error('Length must be a number');
    }

    this._length = stdLength;
  }

  get students() {
    return this._students;
  }

  set students(stdStudents) {
    if (!Array.isArray(stdStudents)) {
      throw new Error('Students must be an array');
    }

    if (stdStudents.every((student) => typeof student !== 'string')) {
      throw new Error('Students must be an array of strings');
    }

    this._students = stdStudents;
  }
}
