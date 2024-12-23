// Need to create a Javascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")

function sumStringNumbers(input) {
    let numberArray = input.split(",");
    let sum = 0;

    for (let i = 0; i < numberArray.length; i++) {
        sum += parseFloat(numberArray[i].trim());
    }
    return sum;
}

let input = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
console.log("Sum of numbers: ", sumStringNumbers(input));