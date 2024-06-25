let student = {
  id: 1,
  name: "Jane",
  age: 21,
  dob: "1/1/2003",
  grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  delete_me: "Test",
};

console.log(
  `Person ${student.id} has been through grade ${
    student.grades[student.grades.length - 1]
  }`
);
console.log(student);
delete student.delete_me;
console.log(student);

let user = {
  firstName: "Matt",
  lastName: "Nebeker",
  city: "Alpine",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user.semesters["semesterOne"] = "complete";
delete user.semesters["semesterFour"];
user["favorite_language"] = "python";
console.log(user);
