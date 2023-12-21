// if

const isUserLogged = true;
if(isUserLogged){
    console.log(`User is logged in`);
}

const temperature = 41;
if(temperature < 50){
    console.log(`temp is less than 50`);
}else{
    console.log(`temp is greater than 50`);
}

// short hand notation

const balance = 1000;
if(balance > 500) console.log(`test`);
else console.log('test 2');

// Nesting

if(balance < 500){
    console.log(`less than 500`);
} else if(balance < 750){
    console.log(`less than 750`);
} else if(balance < 900){
    console.log(`less than 900`);
}
else{
    console.log(`Pata nhi kya hai`);
}