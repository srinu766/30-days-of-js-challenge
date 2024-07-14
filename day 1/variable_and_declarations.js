// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var numberVar = 5;
console.log(numberVar);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let stringLet = "Hello, srinu!";
console.log(stringLet);




// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const booleanConst = true;
console.log(booleanConst);


// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let numberVar = 25;
let stringVar = "JavaScript";
let booleanVar = false;
let objectVar = { name: "srinu", age: 30 };
let arrayVar = [1, 2, 3, 4, 5];

console.log(typeof numberVar); // number
console.log(typeof stringVar); // string
console.log(typeof booleanVar); // boolean
console.log(typeof objectVar); // object
console.log(typeof arrayVar); // object


// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let variableLet = "Initial Value";
console.log(variableLet); // Initial Value

variableLet = "New Value";
console.log(variableLet); // New Value


// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the erro
const constantVar = "I am constant";
console.log(constantVar); // I am constant

// Uncommenting the next line will cause an error
// constantVar = "New Value"; // TypeError: Assignment to constant variable.



// Feature Request 1: Variable Types Console Log
// Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let numberVar1 = 42;
let stringVar1 = "Hello, JavaScript!";
let booleanVar1 = true;
let objectVar1 = { name: "vasu", age: 25 };
let arrayVar1 = [10, 20, 30, 40, 50];

console.log("Value:", numberVar1, "Type:", typeof numberVar1); // Value: 42 Type: number
console.log("Value:", stringVar1, "Type:", typeof stringVar1); // Value: Hello, JavaScript! Type: string
console.log("Value:", booleanVar1, "Type:", typeof booleanVar1); // Value: true Type: boolean
console.log("Value:", objectVar1, "Type:", typeof objectVar1); // Value: { name: 'Bob', age: 25 } Type: object
console.log("Value:", arrayVar1, "Type:", typeof arrayVar1); // Value: [ 10, 20, 30, 40, 50 ] Type: object


// Feature Request 2: Reassignment Demo
// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// Using let
let reassignableVar = "Initial Value";
console.log("let before reassignment:", reassignableVar); // let before reassignment: Initial Value

reassignableVar = "New Value";
console.log("let after reassignment:", reassignableVar); // let after reassignment: New Value

// Using const
const constantVar1 = "Constant Value";
console.log("const before reassignment:", constantVar1); // const before reassignment: Constant Value

// Uncommenting the next line will cause an error
// constantVar = "Attempted New Value"; // TypeError: Assignment to constant variable.



