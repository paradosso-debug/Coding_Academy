const clearPlaylistBtn = document.getElementById("clearPlaylistBtn");
const clearRecentBtn = document.getElementById("clearRecentBtn");

const searchInput = document.getElementById("searchInput");
const limitSelect = document.getElementById("limitSelect");
const statusText = document.getElementById("statusText");

const resultsGrid = document.getElementById("resultsGrid");
const playlistGrid = document.getElementById("playlistGrid");
const playlistCount = document.getElementById("playlistCount");
const recentSearches = document.getElementById("recentSearches");

const PLAYLIST_KEY = "itunesSavedPlaylist";
const RECENT_KEY = "itunesRecentSearches";

let savedPlaylist = [];
let recentTerms = [];

function getFromStorage(key, fallbackValue) {
  try {
    const savedText = localStorage.getItem(key);

    if (!savedText) {
      return fallbackValue;
    }
    return JSON.parse(savedText);
  } catch (error) {
    return fallbackValue;
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function clearResults() {
  resultsGrid.innerHTML = "";
}

function createSafeSongObject(song) {
  return {
    trackId: song.trackId,
    trackName: song.trackName || "Unknown Track",
    artistName: song.artistName || "Unknown Artist",
    artworkUrl100: song.artworkUrl100 || "",
    previewUrl: song.previewUrl || "",
    collectionName: song.collectionName || "Unknown Album",
  };
}

function renderSongs(songs) {
  clearResults();
  songs.forEach((song) => {
    const safeSong = createSafeSongObject(song);
    const card = documentElement("div");
    card.classList.add("song-card");

    const image = document.createElement("img");
    image.classList.add("cover");
    image.src = safeSong.artworkUrl100.replace("100x100", "400x400");
    image.alt = `${safeSong.trackName} cover art`;

    const title = document.createElement("p");
    title.classList.add("song-title");
    title.textContent = safeSong.trackName;

    const artist = document.createElement("p");
    artist.classList.add("song-artist");
    artist.textContent = `${safeSong.artistName} - ${safeSong.collectionName}`;

    const actions = document.createElement("div");
    actions.classList.add("card-actions");
    previewLink.textContent = "Preview";

    const previewLink = document.createElement("a");
    previewLink.classList.add("action-link");
    previewLink.href = safeSong.previewUrl || "#";
    previewLink.target = "_blank";
    previewLink.rel = "noopener noreferrer";

    const saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");
    saveButton.type = "button";
    saveButton.textContent = "♡ Save";

    saveButton.addEventListener("click", () => {
      saveSong(safeSong);
    });
    actions.appendChild(previewLink);
    actions.appendChild(saveButton);

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(artist);
    card.appendChild(actions);

    resultsGrid.appendChild(card);
  });
}

function renderPlaylist() {
  playlistGrid.innerHTML = "";
  playlistCount.textContent = `${savedPlaylist.length} saved song${savedPlaylist.length === 1 ? "" : "s"}`;

  if (savedPlaylist.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.classList.add("empty-message");
    emptyMessage.textContent =
      "No saved songs yet. Search for music and click Save to build your playlist";
    playlistGrid.appendChild(emptyMessage);
    return;
  }
}

savedPlaylist.forEach((song) => {
  const card = document.createElement("div");
  card.classList.add("saved-card");

  const image = document.createElement("img");
  image.classList.add("cover");
  image.src = song.artworkUrl100.replace("100x100", "400x400");
  image.alt = `${song.trackName} cover art`;

  const info = document.createElement("p");
  info.classList.add("saved-info");

  const title = document.createElement("p");
  title.classList.add("song-title");
  title.textContent = song.trackName;

  const artist = document.createElement("p");
  artist.classList.add("song-artist");
  artist.textContent = song.artistName;

  const actions = document.createElement("div");
  actions.classList.add("saved-actions");

  const previewLink = document.createElement("a");
  previewLink.classList.add("action-link");
  previewLink.href = song.previewUrl || "#";
  previewLink.target = "_blank";
  previewLink.rel = "noopener noreferrer";
  previewLink.textContent = "Preview";

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-btn");
  removeButton.type = "button";
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", () => {
    removeSong(song.trackId);
  });

  actions.appendChild(previewLink);
  actions.appendChild(removeButton);

  info.appendChild(title);
  info.appendChild(artist);
  info.appendChild(actions);

  card.appendChild(image);
  card.appendChild(info);

  playlistGrid.appendChild(card);
});

function saveSong(song) {
  const alreadySaved = savedPlaylist.some(
    (savedSong) => savedSong.trackId === song.trackId,
  );
  if (alreadySaved) {
    statusText.textContent = `"${song.trackName}" is already in your playlist`;
    return;
  }

  savedPlaylist.push(song);
  saveToStorage(PLAYLIST_KEY, savedPlaylist);
  renderPlaylist();
  statusText.textContent = `Saved "${song.trackName}" to your playlist`;
}

function removeSong(trackId) {
  savedPlaylist = savedPlaylist.filter((song) => {
    song.trackId !== trackId;
    saveToStorage(PLAYLIST_KEY, savedPlaylist);
    renderPlaylist();
  });
}
