// BASIC VARIABLES

let firstName = "Matt";

let age = 33;

let faviteColor = "Gold";

console.log(firstName);
console.log(age);
console.log(faviteColor);

console.log(
  "My name is " +
    firstName +
    ", I am " +
    age +
    " years old, and my favorite color is " +
    faviteColor +
    ".",
);

//REASSIGMENT WITH let
let currentColor = "Blue";

console.log("At first, my favorite color was " + currentColor + ".");

currentColor = "Red";

console.log("Now my favorite color is " + currentColor + ".");

let userName = "Jayden";

let userAge = 88;

let userInfo = `This users name is ${userName} and is ${userAge} years old.`;

console.log(userInfo);

// let VS const

let mood = "tired";

console.log(mood);

mood = "Happy";

console.log(mood);

const birthyear = 1999;
console.log(birthyear);

// birthyear = 1995;
// console.log(birthyear);

const fullName = "Jhon Smith";
const profileAge = 22;
const country = "Iceland";
const favoriteHobby = "Tennis";
let isStudent = true;

console.log("Full Name:", fullName);
console.log("Age:", profileAge);
console.log("Country:", country);
console.log("Favorite Hobby:", favoriteHobby);
console.log(" Is Student", isStudent);

isStudent = false;
console.log("Full Name:", fullName);
console.log("Age:", profileAge);
console.log("Country:", country);
console.log("Favorite Hobby:", favoriteHobby);
console.log(" Is Student", isStudent);
