// Read what is a closure and give an example here

// Answer
// In layman's terms a closure is enclosing a function inside the scope of another funciton. Doing so helps in by giving the inner function access to the variables of the outer function. This type of closure is called Function-Scope Closure. 

// Closures are very similar to a class, in the sense that a class has its properties which are accessed by only its methods and similar a closure has data (declared in outer function) that is accessed by inner function.

// Due to closures we can now have private properties in class which was not possible in the past. Furthermore, it is possible to do closure chaining which essentially means function inside a function and so on.

// It is highly advisable to not use closures until needed as it will effect performance. A simple example of closure:

let someFunc = function (x) {
    // Closure Environment
    return function (y) {
        return x + y;
    }
}

module.exports = { someFunc };