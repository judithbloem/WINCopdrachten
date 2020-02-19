 console.log('JS werkt')
 
 
 async function finalSolutionMovieGenres() {
    const finalData = await getData();
    console.log("this is the final data call of this test ", finalData)
  displayMovieGenres(finalData);
  
};

finalSolutionMovieGenres()


function displayMovieGenres(array) {
  document.getElementById("movieListGenres").innerHTML += array + "<br>"; 
}


// function displayMovieGenres(filterMovieGenres){
//     const movieGenres = filterMovieGenres
//     movieGenres.forEach(txt=> {
//       const listItem = document.createElement("li");
//          listItem.appendChild(createTextNode(txt));
//          const list = document.getElementById("movieListGenres");
//          list.appendChild(listItem);
//        })};  

    //    function addMoviesToDom(filterMovies){
    //     const arrayMovies = filterMovies.map(movie => movie.Poster);
    //   arrayMovies.forEach(img=> {
    //       const listItem = document.createElement("li");
    //          listItem.appendChild(createImageNode(img));
    //          const list = document.getElementById("movieImages");
    //          list.appendChild(listItem);
    //        })};  


//const retrievedFilmData = JSON.parse(finalSolutionMovieGenres)

// const displayMovieGenres = function(retrievedFilmData){
//     const movieGenres = finalData.genres
//     movieGenres.forEacht(movieGenre => {
//          const listItem = document.createElement('li');
//          const listItemContent = `genre naam: ${retrievedFilmData.name}, id: ${retrievedFilmData.id}`
//          listItem.appendChild(document.createTextNode(listItemContent));
//          document.getElementById("movieListGenres").append(listItem)
//     })
//     displayMovieGenres()
// }

// const genresToHTML = document.getElementById('movieListGenres');
// genresToHTML.innerHTML = finalData();


  