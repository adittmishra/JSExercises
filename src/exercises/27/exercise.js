// What is a callback?
// Answer: Simply said callback is when a function executes another function and wait for a response from it before moving forward with the execution. Callbacks are extremely important in areas where we what to know a response. For example say we clicked a button we want to know if the an action that would happen with click, did happen or not.

function welcome(name) {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
  }, 1000);
}

function success() {
  setTimeout(() => {
    console.log("Greetings successful!!");
  }, 1000)
}

welcome("Aditya");
success();

// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
