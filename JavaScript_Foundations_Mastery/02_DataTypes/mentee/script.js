// VARIABLES PER TYPE

let userName = "John";

let userAge = 32;

let isStudent = true;

let favoriteColor;

let chosenPet = null;

console.log("User Name:", userName, "type:", typeof userName);
console.log("User Age:", userAge, "type: ", typeof userAge);
console.log("Is Student:", isStudent, "type: ", typeof isStudent);
console.log("Favorite Color:", favoriteColor, "type: ", typeof favoriteColor);
console.log("Chosen Pet:", chosenPet, "type: ", typeof chosenPet);

//Sring vs number

let textFive = "5";
let numberFive = 5;

let stringResult = textFive + textFive;
console.log(stringResult);

let numberResult = numberFive + numberFive;
console.log(numberResult);

let mixedResult = "5" - 2;
console.log(mixedResult);

console.log(stringResult, "type: ", typeof stringResult); //string
console.log(numberResult, "type: ", typeof numberResult); // number
console.log(mixedResult, "type: ", typeof mixedResult); // number

let hasCoffee = true;
let isOnline = false;

console.log("Has Coffee:", hasCoffee, "type: ", typeof hasCoffee);
console.log("Is Online:", isOnline, "type: ", typeof isOnline);

let isTired = true;
console.log(isTired);

let emptyString = "";
console.log("Empty String:", emptyString, "type: ", typeof emptyString);

console.log(typeof null);

console.log(typeof undefined);

let person = {
  name: "Han",
  age: 22,
  isprogrammer: true,
};
console.log("Person Object:", person, "type: ", typeof person);

let fruits = ["apple", "banana", "orange"];
console.log("Fruits Array:", fruits, "type: ", typeof fruits);

let products = [];

let prodcuts = ["shoes", "shirt", "pants"];
