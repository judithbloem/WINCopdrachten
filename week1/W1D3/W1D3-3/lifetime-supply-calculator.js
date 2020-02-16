console.log("opdracht W1D3-2");

/*const calculateSupply = function(age, amountPerDay) {
  let maxAge = 90;
  let total = 365 * amountPerDay * (maxAge - age);
  console.log(
    "You will need ",
    total,
    " to last you until the ripe old age of",
    maxAge
  );
};

calculateSupply(80, 2);
calculateSupply(55, 3);
calculateSupply(77, 5.5);*/

//Math.round ??

const calculateSupply = function(age, amountPerDay) {
  const maxAge = 90;
  const total = Math.round(365 * amountPerDay * (maxAge - age));
  let message =
    "You will need " +
    " " +
    total +
    " to last you until the ripe old age of" +
    " " +
    maxAge;
  console.log(message);
};

calculateSupply(80, 2);
calculateSupply(55, 3);
calculateSupply(77, 5.5);
