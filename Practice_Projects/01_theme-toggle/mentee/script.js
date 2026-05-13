/*
  Project 02 — Theme Toggle 

*/

/* =========================================================
   STEP 1: Select all needed DOM elements
   - Theme toggle button
   - Status text
   - Page body
   ========================================================= */
// TODO: Select the theme toggle button
// TODO: Select the status text element
// TODO: Select the body element

const themeBtn = document.getElementById("themeBtn");

const statusText = document.getElementById("statusText");

const body = document.body;

/* =========================================================
   STEP 2: Decide your theme class name
   - Choose one class name that represents dark mode
   ========================================================= */
// TODO: Create a constant that stores the dark mode class name

const darkClass = "dark";

/* =========================================================
   STEP 3: Create a function called toggleTheme()
   - This function will handle all theme switching logic
   ========================================================= */
// TODO: Create the toggleTheme function

/* =========================================================
   STEP 4: Toggle the class on the body
   ========================================================= */
// TODO: Toggle the dark mode class on the body

function toggleTheme() {
  body.classList.toggle(darkClass);

  /* =========================================================
   STEP 5: Check which theme is currently active
   ========================================================= */
  // TODO: Check if the body contains the dark class

  const isDark = body.classList.contains(darkClass);

  /* =========================================================
   STEP 6: Update the button label and status text
   ========================================================= */
  // TODO: Update button text based on the theme
  // TODO: Update the status text based on the theme

  themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";

  statusText.textContent = isDark
    ? "Current Theme: Dark"
    : "Current Theme: Light";
  console.log(isDark);
}

/* =========================================================
   STEP 7: Attach a click event listener to the button
   ========================================================= */
// TODO: Add a click event listener to the button

themeBtn.addEventListener("click", toggleTheme);

/* =========================================================
   STEP 8: Test by clicking the button multiple times
   ========================================================= */
// TODO: Click the button and confirm everything updates correctly
