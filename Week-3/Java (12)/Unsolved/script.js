// WRITE YOUR CODE HERE
let students = ["Tom", "Mary", "Paul", "May"];

// 1. total number ff elements
console.log(students.length);

// 2. the message "Welcome to the class STUDENT_NAME" is logged using each element in the array
console.log("Welcome to the class " + students[0]);
console.log("Welcome to the class " + students[1]);
console.log("Welcome to the class " + students[2]);
console.log("Welcome to the class " + students[3]);
// or
for  (let i=0; i <students.length; i++) {
    console.log ("Welcome to the class " + students [i]);
}

// 3. replace the first element with "New Student"
students[0] = "New Student";

// 4. after an if statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged
if (students[0] === "New Student") {
    console.log(students[0], "is in class");
}