// for of

const arr = [1, 2, 3, 4, 5];
for (const index of arr) {
    console.log(index);
}

// Does not work on object

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('UK', "United Kingdom")

console.log(map);

for(const [key, value] of map){
    console.log(key, ":-", value);
}