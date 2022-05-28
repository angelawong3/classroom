const a = process.argv[2];
const b = process.argv[3];

// 1st way: ising a conditional statement
if (a === b) {
  console.log(true);
} else {
  console.log(false);
}

// other ways: using a ternary operator
console.log(a === b ? "true" : "false");

// comparing variables
console.log(a === b);

// comparing argyment values directly
console.log(process.argv[2] === process.argv[3]);
