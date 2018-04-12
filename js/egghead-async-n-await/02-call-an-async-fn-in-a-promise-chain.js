const fetch = require('node-fetch');

async function fetchUser(username) {
  const url = `http://api.github.com/users/${username}`;
  const res = await fetch(url);
  return await res.json();
}

fetchUser('konekoya').then(user => console.log(user.name, user.company));
