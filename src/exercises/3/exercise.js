// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

function checkIfArray(input) {
  let isInputAnArray = false;

  //... Used: Array.isArray() property
  isInputAnArray = Array.isArray(input);

  if (isInputAnArray) {
    return "Given input is an Array";
  } else {
    return "Given input is not an Array";
  }
}

module.exports = { checkIfArray }
