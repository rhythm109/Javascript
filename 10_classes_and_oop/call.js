function setUserName(username){
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username) // For context issue
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "cha.com", "123")
console.log(chai)