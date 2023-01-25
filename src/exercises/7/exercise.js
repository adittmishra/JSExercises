// Complete the below function.
// - Use Array methods

function commaSeparatedString(inputArray) {
  // Given an Array like ["firstName","lastName"]
  // Return a comma separated String like "firstName,lastName"
  return inputArray.join(',');
}


if(typeof require !== 'undefined' && require.main === module){
  res = commaSeparatedString(["firstName","lastName"]);
  console.log(res);
}

module.exports = { commaSeparatedString }
