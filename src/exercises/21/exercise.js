// What are the different levels of logs and how do we print them to the console?
 

// There are broadly three levels of logging in JavaScript:
// 1. Error Log
// 2. Debug Log
// 3. Information Log

// ERROR LOGGING: When our application crashes due to either bugs or changes to APIs etc. So warnings and errors fall under this category/typeof.

// Syntax: 
console.error('This is some ERROR!');
console.warn('This is some WARNING!');


// INFORMATION LOGGING: When we want to log major information to logging like connection established, and etc.

// Syntax:
console.info('This is some major INFORMATION!');


// DEBUG LOGGING: In this case, we would do a detailed logging like stack trace, input and output parameters. Debug logging is the highest level of logging.

// Syntax:
console.debug('This is some detailed DEBUG');

// We can also log using <console.log(level, msg);