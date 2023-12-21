function sayMyName(){
    console.log("Ishan");
}

sayMyName();

// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNum(3, 5);
// addTwoNum(3, "4");
// addTwoNum(3, a); // Not Correct

function addTwoNum(num1, num2){
    return num1 + num2;
}

const result = addTwoNum(3, 5);
console.log("Result : ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter the username");
        return;
    }
    return `${username} just logged in!`;
}

console.log(loginUserMessage("Ishan"));
console.log(loginUserMessage()); // Returns undefined

// With Objects

function calcualteCartPrice(...num1){
    return num1;
}

console.log(calcualteCartPrice(200, 400, 500));

const user = {
    username : "ishan", 
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);
handleObject({
    username : "Smith", 
    price : 1999
})

const myNewArray = [200, 400, 100, 800]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray)); 
console.log(returnSecondValue([100, 1000, 100000])); 





