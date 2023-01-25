// Complete the below function. Find the length of the given array.
// - Also validate the input. Accept the input only if its an array.

function findTheLength(inputArray) {
  let lengthOfArray;

  if(Array.isArray(inputArray)) {
    lengthOfArray = inputArray.length; 
    return `Length of the given input array is ${lengthOfArray}`;
  } else {
    return 'Input is not of type Array';
  }
}


module.exports = { findTheLength }
