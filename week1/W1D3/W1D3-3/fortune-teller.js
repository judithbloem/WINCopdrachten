console.log("opdracht W1D3-3");

const tellFortune = function(
  numberOfChildren,
  partnersName,
  location,
  jobTitle
) {
  console.log(
    "You will be a" +
      " " +
      jobTitle +
      " in " +
      location +
      ", and married to " +
      partnersName +
      " with " +
      numberOfChildren +
      " kids"
  );
};

tellFortune(4, "Jochem", "Amsterdam", "analist");
tellFortune(2, "mezelf", "NY", "nanny");
tellFortune(3, "nobody", "Paris", "waitress");

//onderstaande code is meer DRY (don't repeat yourself)
/*
function tellFortune(jobTitle, geoLocation, partner, numKids) {
    let text = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.');
   return text;
}*/
