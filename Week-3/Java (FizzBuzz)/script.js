// one"=" for assigning
// two "==" for comparing two variables irrespective of the datatype of variable
// three "===" for comparing two variables but this will check strict type

var x = 1;

while (x <= 100) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz");
    } else if (x % 3 === 0){
        console.log("Fizz");
    } else if (x % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(x);
    }

    x = x + 1;
}
