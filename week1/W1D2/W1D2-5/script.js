console.log("Opdracht W1D2-5");

const age = 18;
const isFemale = true;
const driverStatus = "wel alcohol";
const name = "Sarah";
const totalAmount = 150;

if (age >= 18) console.log("je hebt toegang tot dit cafe");
else console.log("je bent te jong en hebt geen toegang tot dit cafe");

if (isFemale) console.log("je hebt toegang tot de ladiesnight");
else console.log("de ladiesnight is alleen voor vrouwen");

//const Bob = false;
//if (Bob) console.log("je bent Bob en mag rijden");
//else console.log("je bent geen Bob en mag niet rijden");

if (driverStatus === "bob") console.log("je bent Bob en mag rijden");
else console.log("je bent geen Bob en mag niet rijden");

if (age >= 18 && age <= 25) console.log("je krijgt 50% korting");
else console.log("helaas, je krijgt geen korting");

if (name === "Sarah" || name === "Bram")
  console.log("je krijgt een gratis biertje");
else console.log("helaas, Sarah en Bram krijgen wel een gratis biertje");

if (totalAmount > 100) console.log("je krijgt een flesje champagne");
else if (totalAmount > 50) console.log("je krijgt een portie nacho's");
else if (totalAmount > 25) console.log("je krijgt (vega) bitterballen");
else console.log("geef net iets meer euro uit voor gratis bitterballen");
