// const instUser = new Object() // => Singleton Object
// const instUser = {} // => Non Singleton Object

const instUser = {}
instUser.id = "123ab";
instUser.name = "Sam";
instUser.isLoggedIn = false

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "ishan",
            lastname : "dem"
        }
    }
}

console.log(regularUser.fullname);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id : 1,
        email : "sone.com"
    }
]

console.log(instUser);
console.log(Object.keys(instUser));
console.log(Object.values(instUser));
console.log(Object.entries(instUser));

console.log(instUser.hasOwnProperty('email'));

// Destructuring

const course = {
    courseName : "jsReact",
    price : "Nope",
    courseInstructor : "God"
}

const{courseInstructor} = course;
console.log(courseInstructor);
