console.log("JS werkt")

//ToDo3:
//console.log(movies)

// //ToDo4: nog doen: korter en meer naar ToDo opschrijven   
   //console.log(moviePoster);
   const addMoviesToDom = movies.map(movie => movie.Poster);
   const movieImagesElement = document.getElementById("movieImages");
  function createImageNode(fileName) {
    const img = new Image();
    img.src = fileName;
    return img;
  }
   addMoviesToDom.forEach(img => {
    movieImagesElement.appendChild(createImageNode(img));
  });   


//ToDo6/7/8
const handleOnChangeEvent = function() {
 // console.log(event.target.value)
};

  const radioButtons = document.querySelectorAll("#radioBtns");
  radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener("change", handleOnChangeEvent) 
       
       //console.log(event)
   // console.log('het werkt')
  });


// nonDRY filter Arrays -> combi maken met switch
const newestMovies = movies.filter((movie) => {
  return parseInt(movie.Year) >=2014;
});
//console.log(newestMovies);

const avengersMovies = movies.filter((movie) => {
  return movie.Title.includes ("Avengers");
});
//console.log(avengersMovies);

const xMenMovies = movies.filter((movie) => {
  return movie.Title.includes ("X" && "Men");
});
//console.log(xMenMovies);

const princessMovies = movies.filter((movie) => {
  return movie.Title.includes ("Princess");
});
//console.log(princessMovies);

const batmanMovies = movies.filter((movie) => {
  return movie.Title.includes ("Batman");
});
//console.log(batmanMovies);

//ToDo10 Switch moet nog combie met ToDo 7/8
let wordInMovieTitle = handleOnChangeEvent
//'event.target.value';
switch (wordInMovieTitle) {
  case 'newestFilm':
    console.log(newestMovies);
    break;
  case 'avengers':
    console.log(avengersmovies);
    break;
  case 'X-men':
    console.log(xMenMovies);
    break;
  case 'princess':
    console.log(princessMovies);
    break;
   case 'batman':
    console.log(batmanMovies);
    break;
}



document.addEventListener("DOMContentLoaded", event => {addMoviesToDom, radioButtons, handleOnChangeEvent
//rest nog toevoegen
})