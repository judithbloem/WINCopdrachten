console.log("Opdracht W1D3-4");

for (number = 1; number <= 10; number++) {
  let multiplier = 9;
  let result = multiplier * number;
  console.log(multiplier + "*" + number + "=" + result);
}

//bonus (niet zelf gemaakt)

for (let multiplier = 1; multiplier <= 10; multiplier++) {
  for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
  }
}
