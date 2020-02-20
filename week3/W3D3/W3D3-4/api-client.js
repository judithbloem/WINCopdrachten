const API_KEY = "79c54bfc976ae990a5a9d39ceaa0139a";
//fill in API_KEY

async function getData() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    //console.log("Response from API fetch: ", res)
    const retreivedData = await res.json();
    //console.log("The retreived data ", retreivedData);
    return retreivedData;
  } catch (err) {
    console.log(err);
  }
}

///   find/{external_id}
async function getMovieID() {
  const external_id = "tt0111161";
  const URLId = `https://api.themoviedb.org/3/find/${external_id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;
  try {
    const res = await fetch(URLId, { method: "GET" });
    //console.log("Response from API ID fetch: ", res)
    const retreivedIDData = await res.json();
    //console.log("The retreived IDdata ", retreivedIDData);
    return retreivedIDData;
  } catch (err) {
    console.log(err);
  }
}
// deel 1-3
async function getTopRated() {
  const URLTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const res = await fetch(URLTopRated, { method: "GET" });
    //console.log("Response from API ID fetch: ", res)
    const retreivedRatedData = await res.json();
    //console.log("The retreived IDdata ", retreivedRatedData);
    return retreivedRatedData;
  } catch (err) {
    console.log(err);
  }
}

// //deel 1-4
// async function getTopRatedAction(){
//     const URLTopRatedAction = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=action`;
//     try {
//         const res = await fetch(URLTopRatedAction, {method: "GET"});
//         console.log("Response from API ID fetch: ", res)
//         const retreivedActionData = await res.json()
//         console.log("The retreived actiondata ", retreivedActionData);
//         return retreivedActionData;
// }
//     catch (err){
//         console.log(err);

//     }
// }

async function Movie1975() {
  const external_id = "tt0111161";
  const URL1975 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=1975`;
  try {
    const res = await fetch(URL1975, { method: "GET" });
    //console.log("Response from API ID fetch: ", res)
    const retreived1975Data = await res.json();
    console.log("The retreived 1975data ", retreived1975Data);
    return retreived1975Data;
  } catch (err) {
    console.log(err);
  }
}
