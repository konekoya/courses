const output = document.getElementById("output");
const spinner = document.getElementById("spinner");

const API_URL = "https://starwars.egghead.training/film";

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
  })
  .finally(() => {
    spinner.remove();
  });

const getFilms = films => {
  return films
    .filter(film => Boolean(film.title))
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(({ title, episode_id }) => `${episode_id} ${title}`)
    .join("\n");
};
