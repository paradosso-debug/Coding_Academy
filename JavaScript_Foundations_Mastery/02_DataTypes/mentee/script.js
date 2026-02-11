// Create one variable per data type

let userName = "This is a string - John";

let userAge = 33;

let isStudent = true;

let favoriteColor;

let favoriteSport = null;

console.log("userName", userName, "type", typeof userName);
console.log("userAge", userAge, "type", typeof userAge);
console.log("isStudent", isStudent, "type", typeof isStudent);
console.log("favoriteColor", favoriteColor, "type", typeof favoriteColor);
console.log("favoriteSport", favoriteSport, "type", typeof favoriteSport);

// Stings vs numbers

let textNumber = "6";

let number = 5;

let result = textNumber + number;
console.log(result);

let numberResult = number + number;
console.log(numberResult);

let anotherResult = "name minus" - 2;
console.log(anotherResult);

// Booleans

let hasCoffee = true;

let isOnline = false;

console.log("Have you had coffee yet?", hasCoffee);
console.log("Are they online right now?", isOnline);

let sleepy = true;
console.log("Are you sleepy yet?", sleepy);

// typeof weird behavior

let emptyString = "";

console.log("tyeof emptyString", typeof emptyString);
console.log("typeof null", typeof null);
console.log("typeof undefined", undefined);
