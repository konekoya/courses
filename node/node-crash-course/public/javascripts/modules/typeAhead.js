const axios = require('axios');

function searchResultsHTML(stores) {
  return stores
    .map(store => {
      return `
      <a href="/store/${store.slug}" class="search__result">
        <strong>${store.name}</strong>
      </a>
    `;
    })
    .join('');
}

function typeAhead(search) {
  console.log(search);

  if (!search) return;

  const searchInput = search.querySelector('input[name="search"]');
  const searchResults = search.querySelector('.search__results');

  console.log(searchInput, searchResults);

  searchInput.on('input', function() {
    console.log(this.value);

    if (!this.value) {
      searchResults.style.display = 'none';
      return;
    }

    searchResults.style.display = 'block';
    searchResults.innerHTML = '';

    axios
      .get(`/api/search?q=${this.value}`)
      .then(res => {
        if (res.data.length) {
          searchResults.innerHTML = searchResultsHTML(res.data);
        }
      })
      .catch(err => {
        console.error(err);
      });
  });
}

export default typeAhead;
