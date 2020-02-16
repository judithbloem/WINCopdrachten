console.log("Opdracht W1D3-5");

//oude stijl: while loop
let colors = ["yellow", "blue", "red", "orange"];
let i = 0;

while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

// oude stijl: for loop
let colors = ["yellow", "blue", "red", "orange"];

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//nieuwe stijl: array methode
const array1 = ["yellow", "blue", "red", "orange"];

array1.forEach(element => console.log(element));

/* antwoorden
1. Mijn for loop bestaat uit 3 regels
2. Mijn forEach method bestaat uit 2 regels
3. De array methode is overzichtelijker (en dus na oefening makkelijker leesbaar)
4. bv? ->

const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const keys = Object.keys(fruits)
console.log(keys) // [apple, orange, pear]


*/
