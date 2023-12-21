const coding = ["js", "java", "ruby", "cpp", "c"]

// coding.forEach( function (item) {
//     console.log(`${item} is available`);
// } )

coding.forEach( (item) => {
    console.log(`${item} is available`);
})

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

const myCoding = [
    {
        languageName : "javascript", 
        fileName : "js"
    }, 
    {
        languageName : "C++", 
        fileName : "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})