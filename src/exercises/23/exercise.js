// What does a call to the noDelayPrint() do.
// Answer: As there are two noDelayPrint() methods with same signature, therefore due to the concept of overloading the last method is used by the Printer instance.

// Is 'this' inside print function referrring to an instance of Printer
// Answer: No, it refers the calling function, in this case setTimeout()

// Is the correct sheet printed?
//  Comment your understanding
//  Provide a fix.
// Answer: To print the correct sheet we have to bind the print() method to the Printer class.

class Printer {
  constructor() {
    this.index = 0;
    this.print = this.print.bind(this) // Bind the funtion to the instance Class.
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 0); // 0 milli-sec delay
    this.index++;
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(this.print, 1000); //1 sec dely
    this.index++;
  }
}

console.log(new Printer().noDelayPrint());