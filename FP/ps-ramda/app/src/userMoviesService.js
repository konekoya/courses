'use strict';

const FAVORITE_MOVIES = 'favoriteMovies';

function saveFavorites(favorites) {
  localStorage[FAVORITE_MOVIES] = JSON.stringify(favorites);
}

function loadSavedMovies() {
  const data = localStorage[FAVORITE_MOVIES] || '{}';
  return JSON.parse(data);
}

function removeFavorite(id) {
  let favorites = this.loadSavedMovies();
  delete favorites[id];
  this.saveFavorites(favorites);
}

function addFavorite(id, title) {
  let favorites = this.loadSavedMovies();
  favorites[id] = favorites[id] || { title, id };
  this.saveFavorites(favorites);
}

function rateMovie(id, rating) {
  let favorites = this.loadSavedMovies();
  favorites[id] = Object.assign(favorites[id], { rating });
  this.saveFavorites(favorites);
}

module.exports = {
  loadSavedMovies,
  removeFavorite,
  addFavorite,
  saveFavorites,
  rateMovie
}