// Basic IF with a boolean

let isRaining = false;

if (isRaining === true) {
  console.log("It is Raining, take an umbrella.");
} else {
  console.log("No rain right now, enjoy the weather.");
}

let age = 2;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let score = 87;

if (score >= 90) {
  console.log("You are a genious.");
} else if (score >= 80) {
  console.log("You are smart.");
} else if (score >= 70) {
  console.log("You are great.");
} else if (score >= 60) {
  console.log("You are alright.");
} else {
  console.log("You need more practice.");
}

let hasTicket = true;
let hasPopcorn = true;

if (hasTicket === true && hasPopcorn === true) {
  console.log("Ready for the movie!");
} else {
  console.log("Something is missing for the movie.");
}

let isWeekend = true;
let hasDayOff = false;

if (isWeekend === true || hasDayOff === true) {
  console.log("It is a chill day. Relax and enjoy.");
} else {
  console.log("It is a regular day. Sucks for you. ");
}

let userAge = 21;

let hasClubTicket = true;

let isMember = true;

if (userAge >= 18) {
  console.log("Age checked passed..");
} else console.log("Age check failed");

if (hasClubTicket === true || isMember === true) {
  console.log("Entry permitted based on club ticket or membership..");
} else {
  console.log("No ticket or membership, entry denied");
}

if (userAge >= 18 && (hasClubTicket === true || isMember === true)) {
  console.log("Access granted, enjoy!");
} else {
  console.log("Access denied. Go home.");
}
