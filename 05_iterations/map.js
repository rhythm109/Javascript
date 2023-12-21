const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = myNums.map( (num) => num + 10);
console.log(newNums);

// Chaining

const onNums = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 11)
                    .filter((num) => num >= 40)



console.log(onNums);