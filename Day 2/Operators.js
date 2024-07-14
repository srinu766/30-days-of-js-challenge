// Day 2: Operators

// Activity 1: Arithmetic Operations

// • Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 5;
let num2 = 3;
let result = num1 + num2;
console.log(result); // Output: 8

// Task 2: Write a program to subtract two numbers and log the result to the console
let num3 = 5;
let num4 = 3;
let result2 = num3 - num4;
console.log(result2); // Output: 2

// Task 3: Write a program to multiply two numbers and log the result to the console.
let num5 = 5;
let num6 = 3;
let result3 = num5 * num6;
console.log(result3); // Output: 15

// Task 4: Write a program to divide two numbers and log the result to the console.
let num7 = 10;
let num8 = 2;
let result4 = num7 / num8;
console.log(result4); // Output: 5

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let num9 = 17;
let num10 = 5;
let result5 = num9 % num10;
console.log(result5); // Output: 2


// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let x = 5;
x += 3;
console.log(x); // Output: 8

// • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let x2 = 10;
x2 -= 4;
console.log(x2); // Output: 6



// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let num11 = 5;
let num12 = 3;
console.log(num11 > num12); // Output: true
console.log(num11 < num12); // Output: false

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let num13 = 5;
let num14 = 3;
console.log(num13 >= num14); // Output: true
console.log(num13 <= num14); // Output: false

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let num15 = 5;
let num16 = '5';
console.log(num15 == num16); // Output: true
console.log(num15 === num16); // Output: false


// Activity 4: Logical Operators


// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let x3 = 5;
let y = 3;
let result6 = (x3 > 2) && (y < 4);
console.log(result6); // Output: true


// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let x4 = 5;
let y2 = 3;
let result7 = (x4 > 10) || (y2 < 4);
console.log(result7); // Output: true

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let x5 = 5;
let result8 = !(x5 > 10);
console.log(result8); // Output: true


// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let x6 = 5;
let result9 = (x6 > 0) ? "Positive" : "Negative";
console.log(result9); // Output: "Positive"

// Feature Request
// 1. Arithmetic Operations Script:

let n1 = 5;
let n2 = 3;
console.log("Addition:", n1 + n2);
console.log("Subtraction:", n1 - n2);
console.log("Multiplication:", n1 * n2);
console.log("Division:", n1 / n2);
console.log("Remainder:", n1 % n2);

// 2. Comparison and Logical Operators Script
let n3 = 5;
let n4 = 3;
console.log("Greater than:", n3 > n4);
console.log("Less than:", n3 < n4);
console.log("Greater than or equal to:", n3 >= n4);
console.log("Less than or equal to:", n3 <= n4);
console.log("Equal to:", n3 == n4);
console.log("Not equal to:", n3 != n4);
console.log("And:", (n3 > 2) && (n4 < 4));
console.log("Or:", (n3 > 10) || (n4 < 4));

// 3. Ternary Operator Script:
let x7 = 5;
let result10 = (x7 > 0) ? "Positive" : "Negative";
console.log(result10); // Output: "Positive "