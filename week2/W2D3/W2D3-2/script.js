console.log('Opdracht W2D3-2')

//nieuwe stijl: array methode
//const array1 = ["yellow", "blue", "red", "orange"];

//array1.forEach(element => console.log(element));

/*//Deel A
const arrayWithWords = ["nice","awesome","tof"];
const addTheWordCool = arrayWithWords.push("cool");
console.log("Add Cool;", arrayWithWords)

//oplossing WINC
const addTheWordCool2 = function(array) {
    array.push("cool");
    return array;
  };
  console.log("Add cool:", addTheWordCool2(["nice", "awesome", "tof"]));
*/
  // Deel B

  //oplossing WINC
  const amountOfElementsInArray2 = function(tellen) {
    return tellen.length;
  };
  console.log(amountOfElementsInArray2(["appels", "peren", "citroenen"]));

  // Deel C
const selectBelgiumFromBenelux = function(eerste){
    return eerste[0];
};
  console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 

  //Deel D
  const lastElementInArray = function(laatste){
      return laatste [laatste.length -1]};

  console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 

  // ook een oplossing
  const lastElementInArray2 = function(laatste2){
    return laatste2.pop();
  };
console.log(lastElementInArray2(["Haas", "Cavia", "Kip", "Schildpad"])); 

// Deel E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
return array.slice(1,4)}

const impeachTrumpSplice = function(array) {
    return array.splice(1)
}
console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

//Oplossing WINC
const presidents2 = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice2 = function(array2) {
  //zoals je hieronder ziet muteert .slice methode niet de bestaande array, maar retourneert een nieuwe die we opslaan in een nieuwe variabele/
  const newArray = array2.slice(1, 4);
  console.log("Nieuwe array:", newArray, "De onaangetaste array", array2);
  return newArray;
};

const impeachTrumpSplice2 = function(array2) {
  const removedElement = array2.splice(0, 1);
  console.log(
    "removed element:",
    removedElement,
    "De mutated array, Trump is missing:",
    array2
  );
  return array2;
};

console.log(impeachTrumpSlice(presidents2)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents2)); // ["Obama", "Bush", "Clinton"]

//Deel F
const stringsTogether = function(array){
    return array.join(" ");
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 

//Deel G
const Array1 = [1,2,3]
const Array2 = [4,5,6]
const combineArrays = Array1.concat(Array2)
console.log(combineArrays)

//oplossing WINC
const combineArrays2 = function(array1, array2) {
    return array1.concat(array2);
  };
  
  console.log(combineArrays2([1, 2, 3], [4, 5, 6]));
  console.log(combineArrays2(["hoi", "hey", "hallo"], [4, 5, 6]));
