const output = document.getElementById("output");

const API_URL = "https://starwars.egghead.training/films";

output.innerText = "Loading...";

fetch(API_URL)
  .then(res => {
    if (!res.ok) {
      throw Error("Unsuccessful request");
    }
    return res.json().then(films => {
      const result = getFilms(films);
      output.innerText = result;
    });
  })
  .catch(error => {
    console.log(error);
    output.innerText = "Sorry, but something went wrong!";
  });

const getFilms = films => {
  return films
    .filter(film => Boolean(film.title))
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(({ title, episode_id }) => `${episode_id} ${title}`)
    .join("\n");
};
