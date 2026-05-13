/*
STEP 1: Select DOM elements
*/
// TODO: Select countText and addBtn

const countText = document.querySelector("#countText");
const addBtn = document.querySelector("#addBtn");

/*
STEP 2: Create a state variable
*/
// TODO: Create a variable named count starting at 0

let count = 0;

/*
STEP 3: Create a helper function to update the UI
*/
// TODO: Create updateCount() that updates the text

function updateCount() {
  countText.textContent = count;
}

/*
STEP 4: Create a function to handle clicks
*/
// TODO: Increment count and call updateCount()

function increment() {
  count++;
  updateCount();
}

/*
STEP 5: Connect the click event
*/
// TODO: Add click event listener to addBtn

addBtn.addEventListener("click", increment);
