console.log("opdracht W1D3-2");

// DEEL A
/*makeCheeseSandwich 
  get one slice ryebread
  add butter
  add cheese slices*/

/*const makeCheeseSandwich = function() {
  console.log("get one slice ryebread");
  console.log("add butter");
  console.log("add cheese slices");
};
makeCheeseSandwich();

// DEEL B

const makeSandwich = function(topping) {
  console.log("get one slice ryebread");
  console.log("add butter");
  console.log("add" + " " + topping);
  console.log("There you go a sandwich with" + " " + topping);
};

makeSandwich("pindakaas");
makeSandwich("speculoos");

// DEEL C

const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};
console.log(calculateDiscountedPrice(100, 12.6));*/

// DEEL D

const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};

const calculateDiscountedPrice2 = function(totalAmount, discount) {
  if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
  } else {
    return totalAmount;
  }
};
console.log(calculateDiscountedPrice2(50, 12.6));
console.log(calculateDiscountedPrice2(20, 12.6));
