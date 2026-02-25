// 05 – LOOPS
// ----------------------------------------------

// ==============================================
// TASK 1 – COUNT UP WITH A FOR LOOP
// ==============================================

// STEP 1: Write a for loop that counts from 1 up to 10.
//         In the loop body, console.log the current number on each step.

// STEP 2: Add a label to your log so it is clear in the console,
//         for example: "Counting up: 1", "Counting up: 2", etc.

for (let i = 1; i <= 10; i++) {
  console.log(`Counting up: ${i}`);
}

// ==============================================
// TASK 2 – SUM OF NUMBERS
// ==============================================

// STEP 3: Create a variable called maxNumber and give it a small number,
//         like 5 or 10.

// STEP 4: Create a variable called total and start it at 0.

// STEP 5: Write a for loop that starts at 1 and goes up to maxNumber.
//         On each loop, add the current number to total.
//         (This is like total = total + currentNumber.)

// STEP 6: After the loop ends, console.log a message that shows
//         the final total, for example:
//         "Sum of numbers from 1 to (maxNumber) is (total)".

let maxNumber = 5;
let total = 0;

for (let i = 1; i <= maxNumber; i++) {
  total = total + 1;
}
console.log(`Sum of numbers from 1 to ${maxNumber} is ${total}`);

// ==============================================
// TASK 3 – COUNT DOWN
// ==============================================

// STEP 7: Write a for loop that counts down from 5 to 1.
//         Hint: start at 5, and decrease the counter each time.

// STEP 8: On each step, console.log a message like:
//         "Countdown: 5", "Countdown: 4", etc.

for (let i = 5; i >= 1; i--) {
  console.log(`Countdown: ${i}`);
}

// ==============================================
// TASK 4 – LOOP OVER AN ARRAY
// ==============================================

// STEP 9: Create an array called favoriteSnacks (or favoriteSongs)
//         with at least 3 string items.

// STEP 10: Write a for loop that goes through the array
//          from the first item to the last item.

// STEP 11: Inside the loop, console.log each item with its index,
//          for example:
//          "Snack 0: Chips"
//          "Snack 1: Chocolate"
//          etc.

let favoriteSnacks = ["Blueberries", "Chips", "Gummies"];

for (let i = 0; i < favoriteSnacks.length; i++) {
  console.log(`Snack ${i}: ${favoriteSnacks[i]}`);
}
