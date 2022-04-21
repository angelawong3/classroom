//WRITE YOUR CODE BELOW
var students =["A", "B", "C", "D", "E"]

console.log(students.length);

// i=index (variable)
// Using a for loop, 
// the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the students array
for  (let i=0; i <students.length; i++) {
    console.log ("Great to see you " + students[i]);
}

// Using a while loop: 
let i=0; 
while (i < students.length) {
    console.log ("Great to see you " + students[i]);
    i++;
  }