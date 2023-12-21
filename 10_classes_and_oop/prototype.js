// let myName = "ishan     "

// console.log(myName.length);


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling", 

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present everywhere`);
}

heroPower.hitesh()


// inheritance

const user = {
    name : "Ishan"
}

const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false
}

const taSupport = {
    makeAssignment : 35,
    fullTime : true ,
    _proto_ : teachingSupport
}

teacher._proto_ = User

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)