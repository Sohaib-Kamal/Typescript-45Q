"use strict";
// Q21.think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let studentdata = [];
// First I will create an object and then push it into the array 'studentdata'
let Student1 = { Name: "Khizr", Age: 23, Rollno: 33 };
let Student2 = { Name: "Kasha", Age: 22, Rollno: 11 };
studentdata.push(Student1);
studentdata.push(Student2);
console.log(studentdata);
// I am now pushing object directly by push witout first saving it in a variable.
studentdata.push({ Name: "Hamza", Age: 21, Rollno: 22 });
console.log(studentdata);
// Printing only the names of students
for (let students of studentdata) {
    console.log(students.Name);
}
