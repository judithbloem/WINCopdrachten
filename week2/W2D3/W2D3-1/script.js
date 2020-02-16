console.log('Opdracht W2D3-1')
document.write('Opdracht W2D3-1')

//Deel A
// function expression
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions();

// function arrow
  const ikRockArrowFunctions2 = () =>
    console.log("Joe, ik rock de arrow functions!2");
  
  ikRockArrowFunctions2();

  //Deel B
// function expression
  const fivePlusSeven = function () {
    return 5 + 7
  };
  console.log(fivePlusSeven())

// function arrow
const fivePlusSeven2 = () => 5 + 7;
console.log (fivePlusSeven2());

//Deel C

const sum = () => 1+2;
console.log (sum());

//oplossing zonder const
()=> 1+2

//Deel D
const myFunction = (a,b) => a + b;

//Deel E  haakjes om a kunnen weg

const addFive = (a) => a + 5
const addFive2 = a => a + 5

//Deel F
const createObject = () => ({greeting: "Hoi"});
console.log(createObject());