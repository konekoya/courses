const fetch = require('node-fetch');

async function fetchUser(username) {
  const url = `http://api.github.com/users/${username}`;
  const res = await fetch(url);
  const user = await res.json();
  console.log(user);
}

fetchUser('konekoya');
