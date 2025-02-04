//  Write a program to find the factorial of a number using a recursive function

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let num = 5;
console.log(`Factorial of ${num} : ${factorial(num)}`);