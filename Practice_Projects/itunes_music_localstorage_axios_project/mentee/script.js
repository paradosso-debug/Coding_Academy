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
