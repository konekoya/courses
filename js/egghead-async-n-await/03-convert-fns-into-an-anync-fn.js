const fetch = require('node-fetch');

// const fetchUser = async function(username) {
//   const url = `http://api.github.com/users/${username}`;
//   const res = await fetch(url);
//   const user = await res.json();
//   console.log(user);
// };

// fetchUser('konekoya');

class GitHubApiClient {
  async fetchUser(username) {
    const url = `http://api.github.com/users/${username}`;
    const res = await fetch(url);
    const user = await res.json();
    console.log(user);
  }
}

const client = new GitHubApiClient();
client.fetchUser('konekoya');
