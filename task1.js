const numbers = [-1, -2, 0, 4, -23, 45];

function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}

const positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers);