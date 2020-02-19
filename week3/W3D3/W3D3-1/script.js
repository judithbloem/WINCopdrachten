const partOne = (...number) => {
    return number.reduce(function(prev, current){
    return prev + current;
});
}
console.log(partOne(1,2,3,4,5));


const partTwo = (x, y, z) => {
    return x + y + z;

}
let nums = [6,7,8];
console.log(partTwo(...nums))