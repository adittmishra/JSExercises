/*
Make this a node Project
Install jest
Write unit tests for all the exercises.
While writing test cases keep these in mind
1. Unit Test are not just for code coverage.
2. Do not write unit tests for the sake of writing. Cover the important and corner cases.
3. Maintaining should never be an added burden to the team.  
*/

// import printOneToTen from "../1/exercise.js";
const { divideTenByNumber } = require("../2/exercise.js")
const { checkIfArray } = require("../3/exercise.js")
const { greeting } = require("../4/exercise.js")
const { binaryToDecimal } = require("../5/exercise.js")
const { findTheLength } = require("../6/exercise.js")

const { commaSeparatedString } = require("../7/exercise.js")
const { multiplyArrayByTwo } = require("../9/exercise.js")
const { findVoteEligibleCandidates } = require("../10/exercise.js")
const { sumOfArray } = require("../11/exercise.js")
const employeeEligiblity = require("../13/exercise.js")
const { newEmployee } = require("../14/exercise.js")
const { Leave } = require("../16/exercise.js")
const { someFunc } = require("../25/exercise.js")
const { counter } = require("../26/exercise.js")
const { calculateVolume } = require("../29/exercise.js")
const { multiply } = require("../34/exercise.js")

const {A, B, C, D} = require("../36/exercise.js")


// Exercise 2:
test('Check 10 / number', () => {
  expect(divideTenByNumber(-2)).toBe(-5);
  expect(divideTenByNumber(0)).toBe("Indeterminate");
});

// Exercise 3:
test('Check if is an array', () => {
  expect(checkIfArray(2)).toMatch("Given input is not an Array");
  expect(checkIfArray([])).toMatch("Given input is an Array");
});

// Exercise 4:
test('Greetings', () => {
  expect(greeting("Aditya", "Mishra")).toMatch("Welcome Aditya Mishra!");
});


// Exercise 5:
test('Binary string to Decimal', () => {
  expect(binaryToDecimal("101")).toMatch(`Decimal for the given binary string 101 is 5`);
});

// Exercise 6:
test('Find lenth of input array', () => {
  expect(findTheLength([1,2])).toMatch(`Length of the given input array is 2`);
  expect(findTheLength(1,2)).toMatch(`Input is not of type Array`);
});

// Exercise 7:
test('Comma seperated string ', () => {
  expect(commaSeparatedString(["firstName","lastName"])).toMatch(`firstName,lastName`);
});

// Exercise 9:
test('Multiply array by 2', () => {
  expect(multiplyArrayByTwo([-1,0,1])).toEqual([ -2, 0, 2 ]);
});

// Exercise 10:
test('Find vote eligible candidates', () => {
  expect(findVoteEligibleCandidates([
    {
			name:"Ravi",
			age:28
		},
		{
			name:"Aditya",
			age:18
		},
    {
      name:"Rakesh",
      age:8
    }
  ])).toEqual(["Ravi", "Aditya"]);
});

// Exercise 11:
test('Find vote eligible candidates', () => {
  expect(findVoteEligibleCandidates([
    {
			name:"Ravi",
			age:28
		},
		{
			name:"Aditya",
			age:18
		},
    {
      name:"Rakesh",
      age:8
    }
  ])).toEqual(["Ravi", "Aditya"]);
});


// Exercise 12:
test('Sum of array', () => {
  expect(sumOfArray([-1,0,1])).toEqual(0);
});

// Exercise 13:
test('Employee Eligibility', () => {
  expect(typeof employeeEligiblity).toEqual("function");
});

// Exercise 14:
test('New employee full name', () => {
  expect(typeof newEmployee.getFullName).toEqual("function");
  expect(newEmployee.getFullName()).toEqual("New Employee");
});

// Exercise 16:
test('Leave class', () => {
  expect(new Leave(111, '2012/11/01', '2012/11/5').nLeaveDays()).toEqual(`4 days`);
});


// Exercise 18:
test('Leave class', () => {
  expect(new Leave(111, '2012/11/01', '2012/11/5').nLeaveDays()).toEqual(`4 days`);
});


// Exercise 25:
test('Closure Example', () => {
  expect(someFunc(-1)(2)).toBe(1);
});

// Exercise 26:
test('IIFE', () => {
  counter.value();
  counter.increment();
  counter.increment();
  counter.value();
  counter.decrement();
  expect(counter.value()).toBe(2);
});

// Exercise 29:
test('Currying function', () => {
  expect(calculateVolume(2)(2)(2)).toBe(8);
});

// Exercise 34:
test('Default Parameter', () => {
  expect(multiply()).toBe(1);
});

// Exercise 36:
test('Nullish Coalescing Parameter', () => {
  expect(B() ?? D()).toBe(false);
});