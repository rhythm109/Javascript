// Object literal

const user = {
    username : "hitesh",
    loginCount : 8 ,
    signedIn : true,

    getUserDetails : function () {
        console.log(this);
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());

// Constructor Function
// Provides a unique copy

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this;
}

const userOne = new User("ishan", 12, true)
const userTwo = new User("ChaiaurCode", 19, false) 

console.log(userOne);
console.log(userTwo);