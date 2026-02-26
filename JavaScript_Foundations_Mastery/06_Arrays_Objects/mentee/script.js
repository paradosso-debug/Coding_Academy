// ARRAYS & OBJECTS BASICS —
// -----------------------------------------

// -------- TASK 1 — CREATE A SIMPLE ARRAY --------

// STEP 1: Create an array called favoriteFruits with at least 3 fruits.
// STEP 2: Log the entire array.
// STEP 3: Log the first and second items using indexes.

let favoriteFruits = ["Blueberries", "Rasperries", "Blackberries"];
console.log("All Fruits", favoriteFruits);
console.log("First Index", favoriteFruits[0]);
console.log("Sec Fruit", favoriteFruits[1]);

// -------- TASK 2 — MODIFY AN ARRAY --------

// STEP 4: Add a new fruit to the array (basic: favoriteFruits[3] = "...").
// STEP 5: Update one existing fruit (change its value).
// STEP 6: "Remove" a fruit by setting it to null or an empty string.
// STEP 7: Log the updated array.

favoriteFruits[3] = "Strawberry";
favoriteFruits[1] = "Tangerine";
favoriteFruits[2] = "";
console.log("Updated Fruits Array", favoriteFruits);

// -------- TASK 3 — CREATE A SIMPLE OBJECT --------

// STEP 8: Create an object called student with:
//         name, age, isEnrolled (boolean)
// STEP 9: Log the object.
// STEP 10: Log individual properties (student.name, student.age)

const student = {
  name: "Hannah",
  age: 45,
  isEnrolled: true,
};

console.log("Student object", student);
console.log("Student Name", student.name);
console.log("Student Age", student.age);

// -------- TASK 4 — MODIFY OBJECT PROPERTIES --------

// STEP 11: Update the student's age.
// STEP 12: Add a new property called favoriteColor.
// STEP 13: Log the updated object.

student.age = 22;
student.favoriteColor = "Blue";
console.log("Updated Student Object", student);
