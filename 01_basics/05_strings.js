const name = "ishan"
const repoCount = 10

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ishanry')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = " hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://portfolio.com/ishan%20dev"
console.log(url.replace('%20', '-'));

console.log(url.includes('ishan'));

console.log(gameName.split('n'));

