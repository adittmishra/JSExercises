// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

function binaryToDecimal(binaryString) {
  // Parse strint to Int and use this Int: NumberObject's method toString(radix) 
  let decimalValue = parseInt(binaryString, 2).toString(10);

  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}

binaryToDecimal('0101');