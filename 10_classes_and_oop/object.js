function prod(num){
    return num * 5
}

console.log(prod(5));

prod.power = 2

console.log(prod.power);
console.log(prod.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe()