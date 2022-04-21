// Write Your Code Below

function compareValues(x, y) {
    if (x === y) {
        return "They are equal in type and value";
    } else if ( x == y) {
        return "They are equal in value";
    } else {
        return "The values are not equal";
    }
}

console.log(compareValues(2, 2)); 

// provide two values in function arguments and the function evaluates the values' equality.


// when the values are strictly equal, the message "They are equal in type and value" is logged.


// when the two values are equal but not strictly equal, the message "They are equal in value" is logged.


// when the values are not equal or strictly equal, the message "The values are not equal" is logged.'
