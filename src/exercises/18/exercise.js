// Use Javascript modules to create seperate files for each of the Leave type classes.
// - Comment your understanding about import
// - Comment your understanding about export

// Answer:
// In NodeJs the exports can either be default that means
// module.exports = <className/functionName/variableName>
// or 
// multiple exports
// module.exports = { <className/functionName/variableName> }

// With default export, the import varibleName can be anything because we specify that we are export so-and-so thing.

// With multi-export we are exporting a holder which holds our class/function/variable. Therefore during import we have to write the same <className/functionName/variableName>.

// PS - For imports we use:
// default import 
//     const <any_name> = require("your_path")

// Multi-Export
//     const { <className/functionName/variableName> } = require("your_path")

