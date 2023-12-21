const marvel_heros = ["thor", "Ironman", "loki"];
const dc_heros = ["superhero", "batman", "flash"];

// marvel_heros.push(dc_heros);
// This makes a matrix of array not join array


// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);

const heros = [...marvel_heros, ...dc_heros];
console.log(heros);

const anotherArray = [1, 2, 3, 4, [5, 6, 7, 8], 9];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray("Ishan"));
console.log(Array.from("Ishan"));
console.log(Array.from({name : "Ishan"})); // interesting

let x = 100
let y = 200
let z = 499
console.log(Array.of(x, y, z));