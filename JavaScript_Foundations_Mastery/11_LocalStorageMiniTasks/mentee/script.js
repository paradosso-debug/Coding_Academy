// 10 – localStorage MINI TASKS
// ----------------------------------------------

// ==============================================
// TASK 1 – NAME SAVER
// ==============================================
//
// STEP 1: Select and store the following elements in variables:
//         - nameInput (id "nameInput")
//         - saveNameBtn (id "saveNameBtn")
//         - loadNameBtn (id "loadNameBtn")
//         - clearNameBtn (id "clearNameBtn")
//         - savedNameDisplay (id "savedNameDisplay")

const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");
const loadNameBtn = document.getElementById("loadNameBtn");
const clearNameBtn = document.getElementById("clearNameBtn");
const savedNameDisplay = document.getElementById("savedNameDisplay");

//
// STEP 2: Add a "click" event listener to saveNameBtn.
//         Inside the listener:
//         - Read the current value from nameInput.
//         - Use localStorage.setItem("savedName", value) to save it.
//         - Update savedNameDisplay.textContent so it shows the saved value.
//         - (Optional) If the input is empty, you can decide not to save
//           or show a message like "none yet".

saveNameBtn.addEventListener("click", () => {
  const currentName = nameInput.value;

  if (currentName === "") {
    savedNameDisplay.textContent = "None Yet";
    return;
  }

  localStorage.setItem("savedName", currentName);
});
//
// STEP 3: Add a "click" event listener to loadNameBtn.
//         Inside the listener:
//         - Read the value from localStorage.getItem("savedName").
//         - If it's null (nothing saved), set savedNameDisplay.textContent
//           to "none yet".
//         - Otherwise, show the saved value in savedNameDisplay.

loadNameBtn.addEventListener("click", () => {
  const storedName = localStorage.getItem("savedName");

  if (storedName === null) {
    savedNameDisplay.textContent = "None Yet";
  } else {
    savedNameDisplay.textContent = storedName;
  }
});
//
// STEP 4: Add a "click" event listener to clearNameBtn.
//         Inside the listener:
//         - Use localStorage.removeItem("savedName").
//         - Clear the input (set value to an empty string).
//         - Set savedNameDisplay.textContent back to "none yet".

clearNameBtn.addEventListener("click", () => {
  localStorage.removeItem("savedName");
  nameInput.value = "";
  savedNameDisplay.textContent = "None yet";
});

// ==============================================
// TASK 2 – VISIT COUNTER (RUNS ON PAGE LOAD)
// ==============================================
//
// STEP 5: When the script loads, read the current value of
//         localStorage.getItem("visitCount").
//
// STEP 6: If visitCount is null (first visit), treat it as 0.
//
// STEP 7: Convert the stored string to a number (for example, using Number()).
//
// STEP 8: Add 1 to this number (because the page was just loaded).
//
// STEP 9: Save the new value back to localStorage with setItem.
//
// STEP 10: Update the textContent of visitCountText (id "visitCountText")
//          so it shows the current count.

const storedVisitCount = localStorage.getItem("visitCount");

let visitCountValue;

if (storedVisitCount === null) {
  visitCountValue = 0;
} else {
  visitCountValue = storedVisitCount;
}

visitCountValue = Number(visitCountValue);

visitCountValue = visitCountValue + 1;

localStorage.setItem("visitCount", visitCountValue);
const visitCountText = document.getElementById("visitCountText");
visitCountText.textContent = visitCountValue;

// ==============================================
// TASK 3 – CARD THEME TOGGLE
// ==============================================
//
// STEP 11: Select and store:
//          - the main card (id "storageCard")
//          - the toggleThemeBtn (id "toggleThemeBtn")
//          - the themeStatusText (id "themeStatusText")
//
// STEP 12: When the script loads, read the current theme from
//          localStorage.getItem("cardTheme").
//
// STEP 13: If the theme is "dark", add the "card-dark" class to the card
//          and set themeStatusText.textContent to "dark".
//          Otherwise, make sure the class is NOT there and set text to "light".
//
// STEP 14: Add a "click" event listener to toggleThemeBtn.
//          Inside the listener:
//          - Check the current theme (you can read from localStorage again
//            or track it in a variable).
//          - If it's "light" or not set:
//              * change it to "dark"
//              * add "card-dark" class
//              * update themeStatusText to "dark"
//              * save "dark" in localStorage.
//          - Else if it's "dark":
//              * change it to "light"
//              * remove "card-dark" class
//              * update themeStatusText to "light"
//              * save "light" in localStorage.

const storageCard = document.getElementById("storageCard");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const themeStatusText = document.getElementById("themeStatusText");

const storedTheme = localStorage.getItem("cardTheme");

if (storedTheme === "dark") {
  storageCard.classList.add("card-dark");
  themeStatusText.textContent = "dark";
} else {
  storageCard.classList.remove("card-dark");
  themeStatusText.textContent = "light";
}

toggleThemeBtn.addEventListener("click", () => {
  const currentName = localStorage.getItem("cardTheme");

  if (currentName === "dark") {
    localStorage.setItem("cardTheme", "light");
    storageCard.classList.remove("card-dark");
    themeStatusText.textContent = "light";
  } else {
    localStorage.setItem("cardTheme", "dark");
    storageCard.classList.add("card-dark");
    themeStatusText.textContent = "dark";
  }
});
