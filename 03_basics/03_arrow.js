const user = {
    username : "ishan", 
    price : 999, 
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);


function chat(){
    let username = "ishan"
    console.log(this.username) //  Return undefined
}
chat();

const chai = () => {
    let username = "ishan"
    console.log(this.username); // Return undefined
}

chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => (num1 + num2);
const addUser = (num) => ({username : "ishan"});
console.log(addTwo(3, 5));
console.log(addUser(4));