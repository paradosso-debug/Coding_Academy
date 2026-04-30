# iTunes Music Search + Saved Playlist

## Project Goal

In this project, mentees build a music search app using the iTunes Search API, Axios, DOM manipulation, and localStorage.

The app lets users:

1. Search for songs or artists.
2. Choose how many results to display.
3. Preview songs.
4. Save favorite songs into a personal playlist.
5. Remove songs from the saved playlist.
6. Keep saved songs even after refreshing the page.
7. See recent searches saved with localStorage.
8. Click a recent search to search again quickly.
9. Clear saved recent searches.
10. Clear the saved playlist.

---

## What We Are Learning

## 1. API Requests with Axios

Learn how to use Axios from a CDN to request song data from an API.

Use:

```js
axios.get("https://itunes.apple.com/search", {
  params: {
    term: searchTerm,
    media: "music",
    entity: "song",
    limit: resultLimit,
  },
});
```

This teaches that APIs often need parameters to know what data to return.

---

## 2. Query Parameters

The iTunes API uses query parameters such as:

- `term` — what the user is searching for.
- `media` — the type of media, such as music.
- `entity` — the specific type of result, such as song.
- `limit` — how many results should come back.

Example:

```txt
https://itunes.apple.com/search?term=drake&media=music&entity=song&limit=12
```

---

## 3. DOM Selection

Mentees practice selecting elements using IDs:

```js
const searchInput = document.querySelector("#searchInput");
```

They learn that JavaScript needs to select HTML elements before it can read or change them.

---

## 4. DOM Creation

Create song cards with JavaScript using:

- `document.createElement()`
- `element.classList.add()`
- `element.textContent`
- `element.src`
- `element.href`
- `appendChild()`

This teaches how JavaScript can dynamically build visible HTML.

---

## 5. Event Listeners

Use click and keyboard events:

```js
searchBtn.addEventListener("click", searchSongs);
```

They learn that event listeners wait for user actions.

---

## 6. localStorage

This project teaches localStorage using real music data.

Use:

```js
localStorage.setItem("savedPlaylist", JSON.stringify(savedPlaylist));
```

and:

```js
const storedSongs = JSON.parse(localStorage.getItem("savedPlaylist"));
```

They learn that localStorage can only store strings, so arrays and objects must be converted with JSON.

---

## 7. JSON.stringify()

`JSON.stringify()` converts JavaScript arrays or objects into text so they can be saved in localStorage.

Example:

```js
JSON.stringify(savedPlaylist);
```

---

## 8. JSON.parse()

`JSON.parse()` converts text from localStorage back into real JavaScript data.

Example:

```js
JSON.parse(localStorage.getItem("savedPlaylist"));
```

---

## 9. Arrays of Objects

The saved playlist is an array of song objects.

Example:

```js
[
  {
    trackId: 123,
    trackName: "Example Song",
    artistName: "Example Artist",
    artworkUrl100: "image-url",
    previewUrl: "audio-preview-url",
  },
];
```

This teaches how real apps store related information together.

---

## 10. Preventing Duplicates

The project checks if a song is already saved before adding it again.

This teaches `.some()`:

```js
savedPlaylist.some((song) => song.trackId === newSong.trackId);
```

---

## 11. Removing Data

Mentees remove songs with `.filter()`:

```js
savedPlaylist = savedPlaylist.filter((song) => song.trackId !== trackId);
```

They learn that `.filter()` creates a new array containing only the items that should stay.

---

## 12. Re-rendering the UI

After saving or removing songs, the app re-renders the playlist.

This teaches that changing data is not enough. The page must also be updated visually.

---

## Main Beginner Takeaway

This project teaches mentees that a real app usually has three important parts:

1. **API data** — data coming from outside the app.
2. **DOM rendering** — showing that data on the page.
3. **localStorage** — saving user choices in the browser.

Together, these concepts make the project feel like a real mini music app.
