const apiKey = require('./apiKey');
const userMoviesService = require('./userMoviesService');
const favoriteMovies = userMoviesService.loadSavedMovies();

function clearMovies() {
  document.getElementById('foundMovies').innerHTML = '';
}

function appendElement(parent, htmlText) {
  const el = document.createElement('template');
  el.innerHTML = htmlText;
  document.getElementById(parent).appendChild(el.content.firstElementChild);
}

function displayMovies(movies, totalResults) {
  clearMovies();
  movies.forEach(movie => {
      if (movie.poster_path !== null && movie.poster_path !== undefined) {
        const template = `
          <div class="movie" data-movie-id="${movie.id}">
            <p><strong>${movie.original_title}</strong></p>
            <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" />
            <p>
              <em>Year</em>: ${movie.release_date.substring(0, 4)}
            </p>
          </div>
        `;
        appendElement('foundMovies', template);
      }
  });
}

function movieNotFound() {
  clearMovies();
  const template = `<strong>I'm sorry, we could not found the movie you were looking for<strong>`;
  appendElement('foundMovies', template);
}

function processSearchResponse(response) {
  if(response.total_results > 0) {
    displayMovies(response.results, response.total_results);
  } else {
    movieNotFound();
  }
} 

function processMovieDetailsResponse(movie) {
  const movieDetailTemplate = `
    <div class="movie-detail" data-movie-id="${movie.id}">
      <p><strong>${movie.original_title}</strong></p>
      <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" />
      <p>
        <em>Genres:</em>
        <ul>
          ${displayGenres(movie.id, movie.genres)}
        </ul>
      </p>
      <p>
        <em>Year</em>: ${movie.release_date.substring(0, 4)}
      </p>
      <p>
        <em>Rating:</em> ${movie.vote_average}
      </p>
      <p>
        <button class="btn-close">Close</button> 
        <button class="btn-favorite" data-movie-title="${movie.title}" data-movie-id="${movie.id}">Add to favorites</button>
      </p>
    </div>
  `;

  if (document.getElementsByClassName('movie-detail').length > 0) {
    document.getElementsByClassName('movie-detail')[0].remove();
  }

  const el = document.createElement('template');
  el.innerHTML = movieDetailTemplate;
  document.body.appendChild(el.content.firstElementChild);
  $('.movie-detail').animate({
    opacity: 1
  }, 300);
}

// function isDetailsBeingDisplayed() {
//   return ;
// }

function displayGenres(id, genres) {
  let genresList = '';
  genres.forEach(genre => genresList += `<li>${genre.name}</li>`);
  return genresList;
}

function ratingsOptions(r) {
  let ratings = '<option>Rate this movie</option>';
  for(let i = 10; i > 0; i--) {
    ratings += `<option ${i == r ? 'selected' : ''}>${i}</option>`;
  }
  return ratings;
}

function displayFavoriteMovies() {
  document.getElementById('favorites').innerHTML = '';
  for(let movieId of Object.keys(favoriteMovies)) {
    appendElement('favorites', `<li><span>${favoriteMovies[movieId].title}</span> <select class="movie-rating" data-movie-id="${movieId}">${ratingsOptions(favoriteMovies[movieId].rating)}</select> <a href="#" class="remove-favorite" data-movie-id="${movieId}">Remove</a></li>`)
  }
}

$(document).on('click', '.movie img, .movie p', (e) => {
  e.preventDefault();
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${$(e.target).closest('.movie').data('movie-id')}?api_key=${apiKey}`;
  $.getJSON(movieDetailsUrl, response => {
    processMovieDetailsResponse(response);
  });
});

$(document).on('click', 'button[type=submit]', (e) => {
  e.preventDefault();
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${$("#search").val()}`;
  $.getJSON(url, response => {
    processSearchResponse(response);
  });
});

$(document).on('click', '.btn-close', function() {
  $(this).closest('div').animate({ opacity: 0 }, 300, function() {
    $(this).remove();
  });
});

$(document).on('click', '.btn-favorite', function() {
  const movieKey = $(this).data('movie-id');
  if(!favoriteMovies[movieKey]) {
    const title = $(this).data('movie-title');
    favoriteMovies[movieKey] = { title };
    userMoviesService.addFavorite(movieKey, title);
    displayFavoriteMovies();
  }
  $(this).closest('div').animate({ opacity: 0 }, 300, function() {
    $(this).remove();
  });
});

$(document).on('click', '.remove-favorite', function(e) {
  e.preventDefault();
  const movieId = $(this).data('movie-id');
  delete favoriteMovies[movieId];
  userMoviesService.removeFavorite(movieId);
  displayFavoriteMovies();
});

$(document).on('change', '.movie-rating', function() {
  const movieId = $(this).data('movie-id');
  var rating = $(this).val();
  userMoviesService.rateMovie(movieId, rating);
});

window.onload = function() {
  displayFavoriteMovies();
}