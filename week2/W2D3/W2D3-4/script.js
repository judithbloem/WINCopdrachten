console.log("W2D3-4")

const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
   
 //Deel 1
  //fout: console.log("Dit is de gehele persoon:", [array]);
  //fout: console.log("dit is person 1:", [array[0]]);
//console.log("Dit is de gehele persoon:", person);

 //Deel 2
 //console.log("dit zijn alle namen:", person.name);
// Deel 3
 //console.log("dit is het geboortejaar", 2020-person.age);
//Deel4
//console.log(person.name, 'is een', person.profession)
//Deel5
if (person.age >50){console.log("ouder dan 50 jaar:", person.name)
}

  }