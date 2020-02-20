console.log("JS werkt");

//Deel 1-1
async function setMovieGenres() {
  const movieGenresList = document.getElementById("movieListGenres");
  const data = await getData();
  data.genres.forEach(movieGenre => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`
    );
    li.appendChild(liContent);
    movieGenresList.appendChild(li);
  });
}

setMovieGenres();

//Deel 1-2
async function favoriteMovie() {
  const movieGenresList = document.getElementById("myFavoriteMovie");
  const data = await getMovieID();
  data.movie_results.forEach(movieID => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(`${movieID.title}`);
    li.appendChild(liContent);
    movieGenresList.appendChild(li);
  });
}

favoriteMovie();

//Deel 1-3

async function topRatedMovies() {
  const top10List = document.getElementById("topRatedMovies");
  const data = await getTopRated();
  const top10Rated = data.results.splice(1, 10);
  top10Rated.forEach(movie => {
    //console.log('werkt ie nu eindelijk', top10Rated)

    const li = document.createElement("li");
    const liContent = document.createTextNode(`${movie.title}`);
    li.appendChild(liContent);
    top10List.appendChild(li);
  });
}
topRatedMovies();

//Deel 1-4
// async function topRatedActionMovies() {
//   const top10List = document.getElementById("topRatedActionMovies");
//   const data = await getTopRatedAction();
//   const top10Rated = data.results.splice(1,10)
//   top10Rated.forEach(movie => {

//     console.log('werkt ie nu eindelijk', top10Rated)

//     const li = document.createElement("li");
//     const liContent = document.createTextNode(
//       `${movie.title}`
//     );
//     li.appendChild(liContent);
//     top10List.appendChild(li);
//   });

// };
// topRatedActionMovies()

//Deel 1-5

async function moviesFrom1975() {
  const movieGenresList = document.getElementById("1975Movies");
  const data = await Movie1975();
  data.results.forEach(movie => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(`${movie.title}`);
    li.appendChild(liContent);
    movieGenresList.appendChild(li);
  });
}

moviesFrom1975();
