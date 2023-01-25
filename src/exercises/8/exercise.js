// Complete the below function.
// - Print the given Array. One element in one line
// - Use loops

function printArray(inputArray) {
    inputArray.forEach(element => {
        console.log(element)
    });
}

if(require !== 'undefined' && require.main === module){
    printArray([1,4,5,2]);
}


module.exports = { printArray }
