console.log("opdracht W1D3-3");

const calculateDogAge = function(age) {
  console.log("You doggy is ", age, " years old in dog years!");
  console.log(
    "You doggy is ",
    (humanYears = age * 7),
    " years old in human years!"
  );
};

calculateDogAge(4);
calculateDogAge(0.5);
calculateDogAge(3.5);
