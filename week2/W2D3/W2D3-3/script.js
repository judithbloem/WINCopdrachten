console.log("W2D3-3")

//Deel A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    const findSpiderMan =superheroes.find((spider) => {
        return spider.name === 'Spiderman';
    })
    console.log(findSpiderMan) 
    

    //Oplossing WINC (met expression function)
    const findSpiderMan2 = function(superheroesToBeFiltered) {
        return superheroesToBeFiltered.find(function(superhero) {
          return superhero.name === "Spiderman";
        });
      };
      console.log("Find Spiderman:", findSpiderMan2(superheroes));

    //Deel B

    const doubleArrayValues=[1, 2, 3];
    doubleArrayValues.forEach((number => console.log(number*2)))
    //returned niet als een array maar als losse nummers

    //Oplossing WINC

    const doubleArrayValues2 = function(array2) {
      let newArray = [];
      array2.forEach(number2 => {
        newArray.push(number2 * 2);
      });
      return newArray;
    };
    console.log("Double 1,2,3:", doubleArrayValues2([1, 2, 3]));
// expected output: [2, 4, 6])

    //of

    const doubleArrayValuesArrow = function(array) {
      return array.map(number => {
        return number + number;
      });
    };
       console.log(doubleArrayValuesArrow([1,2,3]))

//Deel C (niet zelf opgekomen, kwam maar tot 1 functie ipv 2)
const containsNumberBiggerThan10 = function(arrayC) {
  return arrayC.some(number => {
return number >10
});
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))

//oplossing WINC
//const containsNumberBiggerThan102 = function(array) {
  //return array.some(number => {
    //return number > 10;
 // });
//};
//console.log(containsNumberBiggerThan102([1, 4, 3, 6, 9, 7, 11]))

//Deel D
const isItalyInTheGreat7 = function(arrayD){

  // WINC oplossing: ipv regel 68
  //function isItalyInTheGreat7(array) {

    return arrayD.includes("Italy");
  }
  console.log(
    isItalyInTheGreat7([
      "Canada",
      "France",
      "Germany",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ])
  );

//deel E
const tenfold = function(arrayE) {
  return arrayE.map(number => {
    return number *10;
  });
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

// forEach oplossing
const tenfoldFE = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 10);
  });
  return newArray;
};
console.log(tenfoldFE([1, 4, 3, 6, 9, 7, 11]))

//Deel F
const isBelow100 = function(arrayF) {
  return arrayF.every(number => {
return number <100
});
};

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))


//WINC oplossing = een functie declaration..

function isBelow1002(array) {
  return array.every(number => {
    return number < 100;
  });
}
console.log(isBelow1002([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))

// De 'beste' oplossing met 2 arrow functies (deze voortaan proberen te gebruiken)

const isBelow1003 = (arrayF) => {
  return arrayF.every(number => {
return number <100
});
};

console.log(isBelow1003([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))