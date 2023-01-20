// Complete the below function.
// - Use Array methods.
// - Do not use loops

function multiplyArrayByTwo(inputArray) {
  console.log(`Given input array is ${inputArray}`);
  return inputArray.map(element=>{
    return element*=2
  });
}

if(require !== 'undefined' && require.main === module){
  res = multiplyArrayByTwo([1,4,2])
  console.log(`Output ${res}`)
}