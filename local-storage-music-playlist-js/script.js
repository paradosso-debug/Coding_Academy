// Step 1:
let playlist = [];

//Step 2:
const titleInput = document.getElementById("title"); // Input field for song title
const artistInput = document.getElementById("artist"); // Input field for artist name
const linkInput = document.getElementById("link"); // Input field for song link (YouTube, Spotify, etc.)
const moodSelect = document.getElementById("mood"); // Dropdown for mood selection
const songForm = document.getElementById("songForm"); // The form element

const playlistContainer = document.getElementById("playlist"); // Where songs will be shown
const filterMoodSelect = document.getElementById("filterMood"); // Dropdown to filter songs by mood
const shuffleBtn = document.getElementById("shuffleBtn"); // Shuffle button
const toggleModeBtn = document.getElementById("toggleModeBtn"); // Dark mode toggle button

// Step 3: Function to load the playlist from localStorage
//  Define a function called loadPlaylist()
// Inside the function:
// - Use localStorage.getItem("customPlaylist") to get the saved data
// - If there is data, parse it using JSON.parse()
// - Then update the playlist array with the parsed data
function loadPlaylist() {
  const saved = localStorage.getItem("customPlaylist");
}

//  Step 4: Function to save the playlist into localStorage
//  Define a function called savePlaylist()
// Inside the function:
// - Use JSON.stringify() to convert the playlist array to a string
// - Use localStorage.setItem() to save it with the key "customPlaylist"

//  Step 5: Function to render the songs onto the screen
//  Define a function called renderPlaylist(songsToRender)
// Inside the function:
// - First, clear the playlist container using innerHTML = ""
// - Use forEach to loop through each song and do the following:
//    1. Create a new div using document.createElement("div")
//    2. Give it a class of "song-card" using classList.add()
//    3. Set its innerHTML using a template literal to display:
//       - song title
//       - artist
//       - mood
//       - a link to listen (opens in a new tab)
//       - a delete button with a data-index attribute
//    4. Append the new div to the playlist container
//
// 🧹 Then, after the forEach loop:
// - Use document.querySelectorAll(".delete-btn") to get all delete buttons
// - Loop through them and add a click event listener to each:
//    → Get the song index from data-index
//    → Remove the song from the playlist array using splice()
//    → Save the updated playlist
//    → Re-render the playlist again

// ➕ Step 6: Function to handle adding a new song
// 👉 Define a function called addSong(e)
// Inside the function:
// - Use e.preventDefault() to stop the form from refreshing
// - Create a new object with title, artist, mood, and link
//   - Use .value to read inputs
//   - Use .trim() on text inputs to remove extra spaces
// - Push the new object into the playlist array
// - Save the playlist
// - Call renderPlaylist(playlist)
// - Use songForm.reset() to clear the form

// 🎯 Step 7: Filter playlist by mood
// 👉 Define a function called filterPlaylist()
// Inside the function:
// - Get the selected value from filterMoodSelect
// - If it’s "all", call renderPlaylist(playlist)
// - Otherwise, use .filter() to get only songs that match the mood
// - Then call renderPlaylist(filtered)

// 🔀 Step 8: Shuffle the playlist using Fisher-Yates algorithm
// 👉 Define a function called shufflePlaylist()
// Inside the function:
// - Loop from the end of the array to the beginning (i = length - 1; i > 0; i--)
// - Create a random index j: Math.floor(Math.random() * (i + 1))
// - Swap playlist[i] and playlist[j] using destructuring
// - After the loop, save and render the playlist again

// 🌙 Step 9: Toggle between Dark Mode and Light Mode
// 👉 Define a function called toggleDarkMode()
// Inside the function:
// - Use classList.toggle("dark") on the body
// - Use contains("dark") to check if dark mode is active
// - Update toggle button text accordingly ("Light Mode" or "Dark Mode")
// - Save the theme preference in localStorage (key = "theme")

// 💡 Step 10: Load the saved theme from localStorage
// 👉 Define a function called loadTheme()
// Inside the function:
// - Use getItem("theme") from localStorage
// - If it’s "dark", add the "dark" class to body and update toggle button text
// - Otherwise, keep the default (light) theme

// 🎯 Step 11: Add event listeners to buttons and form
// 👉 Add the following event listeners:
// - songForm "submit" → addSong
// - filterMoodSelect "change" → filterPlaylist
// - shuffleBtn "click" → shufflePlaylist
// - toggleModeBtn "click" → toggleDarkMode

// 🚀 Step 12: Initialize the app
// 👉 Call the following functions:
// - loadPlaylist()
// - renderPlaylist(playlist)
// - loadTheme()
