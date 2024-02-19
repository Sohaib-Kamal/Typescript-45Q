// Q10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Sohaib Kamal, 16 February 2024. This program pass 3 parameters in the Function 'studentdata' which print these paramters. function is called thrice with different arguments
function student_data(studentname:string, age:number, rollno:number){console.log (` Student Name: ${studentname} Age: ${age} Roll Number: ${rollno}`)}
student_data("Sohaib",38,98)
student_data("Haris",18,95)
student_data("Ayesha",21,117)

// Sohaib Kamal, 16th February 2024. This Program creates two variables but value of Variable 'decision' is conditional on value contained in variable 'age'.
var age = 30;
var decision = (age >= 18) ? "You are eligible for driving" : "You are not permitted to drive";
console.log(decision);


