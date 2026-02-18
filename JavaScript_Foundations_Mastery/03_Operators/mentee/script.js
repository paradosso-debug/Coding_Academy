// 03 – OPERATORS
// ----------------------------------------------
// This file contains ONLY instructions (comments).
// Your job is to turn each instruction into real code.
// Remember: open the console to see your results!

// ==============================================
// TASK 1 – BASIC ARITHMETIC
// ==============================================

// STEP 1: Create two number variables, a and b,
//         and assign them any number values you like.

// STEP 2: Use console.log to show the result of:
//         a + b   (addition)

// STEP 3: Use console.log to show the result of:
//         a - b   (subtraction)

// STEP 4: Use console.log to show the result of:
//         a * b   (multiplication)

// STEP 5: Use console.log to show the result of:
//         a / b   (division)

// STEP 6: Use console.log to show the result of:
//         a % b   (remainder after division)

// STEP 7: For each console.log, include a label so you know what you are seeing.
//         Example idea: console.log("a + b =", a + b);

let a = 10;
let b = 20;
console.log("This is addition", a + b);
console.log("This is subtraction", a - b);
console.log("This is multiplication", a * b);
console.log("This division", a / b);
console.log("This is us using modulus", a % b);

// ==============================================
// TASK 2 – UPDATING A VALUE OVER TIME
// ==============================================

// Imagine you have some money saved and it changes over time.

// STEP 8: Create a variable called savings and give it a starting amount (number).

// STEP 9: Use the += operator to add some money to savings
//         (for example, a paycheck).

// STEP 10: Log the new value of savings with a clear message,
//          like "After paycheck, savings = ..."

// STEP 11: Use the -= operator to subtract an amount
//          (for example, buying groceries).

// STEP 12: Log the value of savings again with a clear message,
//          like "After groceries, savings = ..."

let savings = 100;
savings += 100;
console.log("After paycheck=", savings);

savings -= 50;
console.log("After groceries=", savings);

// ==============================================
// TASK 3 – ORDER OF OPERATIONS
// ==============================================

// STEP 13: Create a variable called resultOne and set it equal to:
//          5 + 3 * 2
//          (Write the expression directly, without extra parentheses.)

// STEP 14: Create a variable called resultTwo and set it equal to:
//          (5 + 3) * 2
//          (Use parentheses here.)

// STEP 15: Log both resultOne and resultTwo with clear messages,
//          and notice how the answers are different.

// ==============================================
// TASK 4 – USING + WITH STRINGS
// ==============================================

// STEP 16: Create a variable called baseTotal with a number value,
//          for example the result of 10 + 5.

// STEP 17: Use console.log with string concatenation to print a message like:
//          "Base total is: " + baseTotal

// STEP 18: Now create a variable called totalMessage that uses a template literal
//          to say the same thing, for example:
//          `Base total is: ${baseTotal}`

// STEP 19: Log totalMessage to the console.

let resultOne = 5 + 3 * 2;
let resultTwo = (5 + 3) * 2;

console.log(resultOne);
console.log(resultTwo);

let baseTotal = 10 + 5;

console.log("Base total is: " + baseTotal);

let totalMessage = `Base total is: ${baseTotal}`;

console.log(totalMessage);
