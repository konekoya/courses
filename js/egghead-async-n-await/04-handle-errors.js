const fetch = require('node-fetch');

async function fetchUser(username) {
  const url = `http://api.github.com/users/${username}`;
  const res = await fetch(url);
  const user = await res.json();

  if (res.status !== 200) throw Error(user.message);

  return user;
}

// fetchUser('dsfddsfdsfsdfsdfisdfjsldfjidsjlfs')
//   .then(user => console.log(user))
//   .catch(err => console.log(`Error: ${err.message}`));

async function ShowGitHubUser(username) {
  try {
    const user = await fetchUser(username);
    console.log(user.name);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

ShowGitHubUser('asdfsaxxxx');
