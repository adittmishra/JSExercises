// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function divideTenByNumber(number) {
  // REASON:
  // Result is defined as LOCAL SCOPE inside if-else.
  // Therefore result in IF is different from result in ELSE
  // As a result Log statement can't see it.

  // SOLUTION
  let result = 0

  if (number != 0) {
    result = 10 / number;
  } else {
    result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
}

divideTenByNumber(0)