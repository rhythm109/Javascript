if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(c); //Possible
// console.log(a) // Not possible
// console.log(b) // Not possible

let a = 300;
if(true) { 
    let a = 10;
    console.log(a);
}
console.log(a);

// Nested Scope

function one(){
    const username = "Ishan"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // Not in scope
    two();
}
one();

// If else

if(true){
    const username = "ishan"
    if(username === "ishan") { 
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // Not in scope
}
// console.log(username); // Not in scope


// Interesting Case

function addOne(value){
    return value + 1;
}
// => This function can be accessed anywhere
addOne(5);
console.log(addOne(5));

const addTwo = function(num){
    return num + 2;
}
// => This function only be hosted after declaration
addTwo(2);
console.log(addTwo(2));