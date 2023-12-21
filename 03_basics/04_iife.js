// Immediately invoked function expressions
(function chai(){
    console.log(`DB Connected`);
})();
// This semicolon is important

(
    (name) => {
        console.log(`DB Connected to ${name}`);
    }
)('ishan')