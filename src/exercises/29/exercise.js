// - Explain currying.
// Answer: It is method of converting a funtion of multiple parameters in a funciton with single parameters. 
// - Convert the below function to curry function

function calculateVolume(length) {
  return function (breath) {
    return function (height) {
      return length * breath * height;
    }
  }
}


module.exports = { calculateVolume }