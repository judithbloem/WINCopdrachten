const huiswerkMaken = (vak, callBack) => {
    console.log(`"Ok,ok, ik ga nu mijn ${vak} huiswerk maken"`);
    setTimeout = () => {callback(); },5000;
}
const klaarMetHuiswerk = () => {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}
huiswerkMaken("wiskunde", klaarMetHuiswerk());


// const huiswerkMaken = function(vak, callback) {
//     console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
//     setTimeout = function () {
//         callback();
//     }, 10000);
// }

// const klaarMetHuiswerk = function(){
//     console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
// }
// huiswerkMaken("wiskunde", klaarMetHuiswerk);