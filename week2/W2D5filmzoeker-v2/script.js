console.log("JS werkt");

// nog doen:
// alle films bij start al in beeld (nu 'slecht' opgelost door extra button)
// link per film naar IMBD
// CSS opmaak 1) (waarom werkt list style none niet??) 2) films in grid

//console.log(movies)

function addMoviesToDom(filterMovies) {
  const arrayMovies = filterMovies.map(movie => movie.Poster);
  arrayMovies.forEach(img => {
    const listItem = document.createElement("li");
    listItem.appendChild(createImageNode(img));
    const list = document.getElementById("movieImages");
    list.appendChild(listItem);
  });
}

const movieImagesElement = document.getElementById("movieImages");

function createImageNode(movieItem) {
  const img = new Image();
  img.src = movieItem;
  return img;
}

const handleOnChangeEvent = function(event) {
  //console.log(event.target.value)

  switch (event.target.value) {
    case "newestFilm":
      selectMovies = movies.filter(movie => {
        return parseInt(movie.Year) >= 2014;
      });
      removeAll();
      console.log(selectMovies);
      addMoviesToDom(selectMovies);
      break;
    case "avengers":
      selectMovies = movies.filter(movie => {
        return movie.Title.includes("Avengers");
      });
      removeAll();
      console.log(selectMovies);
      addMoviesToDom(selectMovies);

      break;
    case "Xmen":
      selectMovies = movies.filter(movie => {
        return movie.Title.includes("X" && "Men");
      });
      removeAll();
      console.log(selectMovies);
      addMoviesToDom(selectMovies);
      break;
    case "princess":
      selectMovies = movies.filter(movie => {
        return movie.Title.includes("Princess");
      });
      removeAll();
      console.log(selectMovies);
      addMoviesToDom(selectMovies);
      break;
    case "batman":
      selectMovies = movies.filter(movie => {
        return movie.Title.includes("Batman");
      });
      removeAll();
      console.log(selectMovies);
      addMoviesToDom(selectMovies);
      break;

    default:
      selectMovies = movies.filter(movie => {
        return movie.Title;
      });
      removeAll();
      console.log(selectMovies);
      addMoviesToDom(selectMovies);
  }
};

const removeAll = () => {
  const removePrevious = document.querySelector("#movieImages");
  removePrevious.innerHTML = "";
};

const addEventListeners = document.querySelectorAll("#radioBtns");
addEventListeners.forEach(function(radioButton) {
  radioButton.addEventListener("change", handleOnChangeEvent);
});

document.addEventListener("DOMContentLoaded", event => {
  addMoviesToDom, handleOnChangeEvent;
  //rest nog toevoegen
});
