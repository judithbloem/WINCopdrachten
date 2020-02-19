const API_KEY = 'xx'
//fill in API_KEY


async function getData() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    try {
        const res = await fetch(apiUrl, {method: "GET"});
        console.log("Response from API fetch: ", res)
        const retreivedData = await res.json()
        console.log("The retreived data ", retreivedData);
        return retreivedData;
} 
    catch (err){
        console.log(err);
    }

}
