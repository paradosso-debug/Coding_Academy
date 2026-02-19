// CONDITIONALS

// BASIC IF WITH A BOOLEAN

let isRaining = false;

if (isRaining) {
  console.log("It is raining, take an umbrella with you.");
} else {
  console.log("No it is not raining. You can leave your home.");
}

// AGE CHECKER using If / Else

let age = 10;

if (age >= 18) {
  console.log("Is Adult");
} else {
  console.log("You are a minor");
}

// Score using If / Else if / Else

let score = 50;

if (score >= 90) {
  console.log("Your grade is an A");
} else if (score >= 80) {
  console.log("Your grade is a B");
} else if (score >= 70) {
  console.log("Your grade is a C");
} else if (score >= 60) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is a F");
}

// Multiple conditions using && and ||

let hasMovieTicket = true;

let hasPopcorn = true;

if (hasMovieTicket === true && hasPopcorn === true) {
  console.log("You are ready to enjoy your movie and popcorn");
} else {
  console.log("You are not fully ready to enjoy your movie");
}

let isWeekend = false;
let hasDayOff = false;

if (isWeekend === true || hasDayOff === true) {
  console.log("It is a relaxing day");
} else {
  console.log("It is a regular day.");
}
