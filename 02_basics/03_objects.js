// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name : "Ishan",
    age : 20,
    [mySym] : "ukkey1", // Correct syntax for symbol
    email : "loficats.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[mySym]);

Jsuser.email = "lofi.com";
// Object.freeze(Jsuser) // To freeze the object
Jsuser.email = "loficats.com"

console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());