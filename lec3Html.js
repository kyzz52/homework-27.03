function factorial(n) {
    let result = 1;
    for (let counter = 1; counter <= n; counter++){
        result= result*counter;
        console.log("Факториал" + counter + "="+ result);
    }
    return result;
}
const number = parseInt(promt("Введите число:"));
alert(factorial(number));
