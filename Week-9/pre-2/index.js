// ### Preclass Drill

// Write a function that takes in an array of integers and the array with duplicates removed

// ```js
// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]
// ```

function deduplicate(input) {
  const response = [];

  for (let index = 0; index < input.length; index++) {
    const item = input[index];

    if (!response.includes(item)) {
      response.push(item);
    }
  }

  console.log(response);
  return response;
}

deduplicate([1, 2, 2, 3]);
deduplicate([4, 5, 4, 4, 7, 5]);
deduplicate([1, 2, 3, 5]);
