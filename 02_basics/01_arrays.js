// Arrays

const myArr = [1, 2, 3, 4, 6];
const myHeroes = ["Shaktiman", "Superman"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[2]);

// Array makes shallow copies with same reference points like heaps

// Array Methods
myArr.push(5);
myArr.pop();

myArr.unshift(0); // => Time consuming
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9)); // => Boolean
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(9)); // => -1

const newArr = myArr.join();
console.log(newArr);

// Slice And Splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr)


const myn2 = myArr.splice(1, 3);

console.log(myn2);
console.log("B ", myArr)

// Slice just takes and copies a piece but splice manipulates the original array



