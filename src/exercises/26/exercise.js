// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.

// - Is there a anonymus function used here? Is so where is it?
// Answer: Yes, they are commented below.

// - What is an IIFE? Have we used one here?
// Answer: An Immediately Invoked Function Expression (IIFE) is a function that runs immediately after it is defined. In here, "counter" is an IIFE.

// - Discuss about "Revealing Module Pattern" and how we have used it.
// Answer: Revealing Module Pattern is a design pattern which is used to create variable, and function/methods to private. We already have used this design pattern with "counter".

// - What are higher order functions?
// Answer: A HOF is simple a function returning another function or a function passed as an actual parameter to another function. The difference between a closure and a HOF is that a closure is used outer scope inside inner scope.


const counter = (function () {
  //Your code goes here.
  let count = 1;
  return {
    increment() { // Anonymus Function used here.
      return count++;
    },
    decrement() { // Anonymus Function used here.
      return count--;
    },
    value() { // Anonymus Function used here.
      return count; 
    }
  }
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());


