console.log("Test JS")

// Opdracht: Wanneer ik als gebruiker op een button van een van de Big 5 klik, wil ik dat die verschijnt in mijn lijstje met "animals spotted". 

// Todo list voor deze opdracht:

// 1. Maak een eventlistener vast aan de buttons 
// 2. Maak een functie die gecalled wordt op het moment dat er op 1 van de buttons wordt geklikt. Check dit met een console.log. 
// 3. Zorg dat het click event wordt doorgegeven aan deze functie. 
// 4. Zorg dat je toegang hebt tot de waarde (value) van de button waar op is geklikt in deze functie. Check dit met console.log. De uitkomst die je wilt zien in de console wanneer je klikt is: Leopard / Lion / Elephant / Rhino of Buffalo. 
// 5. Creeer een nieuw list-item met JavaScript met de bovenstaande waarde (namelijk het dier waar je op hebt geklikt. 
// 6. Selecteer het parent-element waar je dit nieuwe list-item aan vast wilt maken (de spotted animals list).
// 7. Maak het nieuwe list-item vast aan het parent-element.

//1.
const animalButtons = document.querySelectorAll('.big-five-button');
console.log(animalButtons)
animalButtons.addEventListener('click', animal
});

// buttons.addEventListener('click', function () {

// })

// buttons.addEventlistener('click', function(e){
//  console.log(e.target);
//  console.log(e);

// })


//Oplossing WINC



// const animalSpotted = event => {
//     console.log("spotted:", event.target.textContent);
//     const spottedAnimal = event.target.textContent;
//     const listItem = document.createElement("li");
//     listItem.appendChild(document.createTextNode(spottedAnimal));
//     const list = document.getElementById("spotted-animals-list");
//     list.appendChild(listItem);
//   };
  

//   document.addEventListener("DOMContentLoaded", function() {
//     const animalButtons = document.querySelectorAll(".big-five-button");
//     animalButtons.forEach(function(animalButton) {
//       animalButton.addEventListener("click", animalSpotted);
//     });
  
