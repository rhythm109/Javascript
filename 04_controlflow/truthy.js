const userEmail = []
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Email dedo");
}

// falsy values =>
// false, 0, -0, BigInt, "", null, undefined, NaN 

// truthy values =>
// "0" ,'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log(`Empty array`);
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log(`Object is Empty`);
}


// Nullish Coalescing Operator(??) : null undefined
let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15

console.log(val1);
console.log(val2);
console.log(val3);

// Terniary Operator
// condition ? true : false

const price = 10
price >= 80 ? console.log(`greater than 80`) : console.log(`less than 80`);