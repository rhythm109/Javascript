const promiseOne = new Promise(function(resolve, reject){
    // Do and Sync Task
    // DB calls, cryptography

    setTimeout(function(){
        console.log(`Async task is complete`);
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log(`Promise Consumed`);
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async Task 2`);
        resolve()
    }, 1000)
}).then(function(){
    console.log(`Async task is resolved`)
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Chai", email : "chai@example.com"});
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "Chai", password : "123"})
        }
        else{
            resolve('Error : Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log(`The promise is either resolved or rejected`))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "Javascript", password : "123"})
        }
        else{
            resolve('Error : Js went wrong')
        }
    }, 1000)
})

async function consumepromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumepromiseFive();


// Fetch

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch{
//         console.log("E : ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))