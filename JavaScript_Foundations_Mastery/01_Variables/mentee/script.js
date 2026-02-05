// VARIABLES

// Basic Variables

let firstName = "John";
let age = 33;
let favoriteColor = "Blue";

console.log(firstName, age, favoriteColor);

console.log(
  "My Name is " +
    firstName +
    ", I am " +
    age +
    "years old, and my favorite color is " +
    favoriteColor +
    ".",
);

// Reassigment with let variable

let currentColor = "Blue";

console.log("At first, my fav color was " + currentColor + ".");

currentColor = "Red";

console.log("Now my new favorite color is " + currentColor + ".");

// Using Template literals

let personName = "Max";

let personAge = 55;

let greeting = `Hello, my name is ${personName} and I am ${personAge} years old.`;
console.log(greeting);

// Comparing let & const

let personMood = "Excited";
console.log(personMood);

personMood = "Scared";
console.log(personMood);

const birthMonth = "April";
console.log(birthMonth);

birthMonth = "December";
