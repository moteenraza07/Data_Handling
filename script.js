// Part 1
// Create Student object
let student = {
  name: "Moteen",
  age: 30,
  enrolled: true,
  courses: [
    "javascript",
    "Web design",
    "Data Base",
    "Tech writing",
    "Algorithms",
  ],
  info: function () {
    console.log(
      "Student name: " + this.name,
      "Student age: " + this.age,
      "Enrolled in school: ",
      +this.enrolled,
      "Course names:  " + this.courses
    );
  },
};

student.info();
console.log(student.name);
console.log(student.age);

// Part 2
// converting the student object to JSON String
let jsonString = JSON.stringify(student);
console.log(jsonString);

// Convert JSON back into javascript object
let parseStudent = JSON.parse(jsonString);
console.log(parseStudent);
