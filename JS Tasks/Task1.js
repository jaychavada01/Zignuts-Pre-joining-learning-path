//  Need to create JavaScript functions for a sum of numbers in the string (Example like “foo8bar8cat2tc2”)

let numStr = "foo8bar8cat2tc2";

function getNumbersFromString(str) {
  let numArray = str.match(/\d+/g);  // str.match(/\d+/g) is used to find substrings of digits in the string
  return numArray;
}

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  return sum;
}

let numbers = getNumbersFromString(numStr);
console.log("Sum of numbers: ", sumNumbers(numbers));