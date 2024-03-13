const readline = require("readline");
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function factorial(n) {
    let result = 1;
    for (let counter = 1; counter <= n; counter++){
        result= result*counter;
        console.log("Факториал" + counter + "="+ result);
    }
}
userInput.question("Введите число:", function(number){
    factorial(parseInt(number));
});
