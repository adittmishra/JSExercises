// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops

function sumOfArray(inputArray) {
    return inputArray.reduce((acc, curr) => acc + curr, 0);
}


module.exports = { sumOfArray }
