const fetch = require('node-fetch');

async function fetchFromGitHub(endpoint) {
  const url = `http://api.github.com${endpoint}`;
  const res = await fetch(url);
  return await res.json();
}

async function showUserAndRepos(username) {
  const userPromise = fetchFromGitHub(`/users/${username}`);
  const reposPromise = fetchFromGitHub(`/users/${username}/repos`);

  const user = await userPromise;
  const repos = await reposPromise;

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos('konekoya');
