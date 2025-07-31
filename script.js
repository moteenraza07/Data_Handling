// Part 1 & 5
// Create Student object
let student = {
  fName: "Moteen",
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
      "Student name: " + this.fName,
      "Student age: " + this.age,
      "Enrolled in school: ",
      +this.enrolled,
      "Course names:  " + this.courses
    );
  },
  // part 5 create a method to add new course
  addCourse: function (newCourse) {
    this.courses.push(newCourse);
    console.log("The new course is: ", newCourse);
  },
  // part 5 create total course count method
  totalCourses: function () {
    return this.courses.length;
  },
};

student.info();
console.log(student.fName);
console.log(student.age);

// part 5
student.addCourse("Math");
console.log("Updated course: ", student.courses);
// part 5
student.totalCourses();
console.log(student.totalCourses());

// Part 2
// converting the student object to JSON String
let jsonString = JSON.stringify(student);
console.log(jsonString);

// Convert JSON back into javascript object
let parseStudent = JSON.parse(jsonString);
console.log(parseStudent);

// Part 3
// destructure name and courses
const { fName, courses } = student;
console.log("Name: ", fName);
console.log("Courses: ", courses);

// create an array of scores
// destructure first 2 scores from the array
let scores = [85, 92, 74, 68, 22, 50];
const [firstScore, secondScore] = scores;
console.log("First Score: ", firstScore);
console.log("Second Score: ", secondScore);

//Part 4
// The Spread Operator
const copyStudent = { ...student };
console.log(copyStudent);

let cloneStudent = {
  ...student,
  graduationYear: 2027,
};

console.log(cloneStudent);

// merge 2 array together
let newCourse = ["React", "Python"];

let allCourse = [...student.courses, ...newCourse];

console.log(allCourse);

//Bonus

let totalScore = [90, 75, 44, 88, 67, 58];

let total = totalScore.reduce((sum, scores) => sum + scores, 0);
let average = total / totalScore.length;
console.log(average);
