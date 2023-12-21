// for

for(let index = 0; index < 10; index++){
    const element = index;
    console.log(element);
}

for (let i = 0; i < 12; i++) {
    if(i >= 10) console.log(`Number is ${i}`);
}

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        if(i * j == 40) console.log(`${i} * ${j} = ${i * j}`);
    }
}

// break and continue

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}
for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}
