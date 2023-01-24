// Optional chaining
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

const employeeRavi = {
  firstName: "Ravi",
  lastName: "Teja",
  experience: 8,
  getFullname: () => {
    return `${firstName},${lastName}`;
  },
};

function getExperienceOfRavi() {
  // - Modied the function to use optional chaining.
  if (employeeRavi?.getExperience) {
    console.log(employeeRavi.getExperience());
  }
  if (employeeRavi?.firstName) {
    console.log(employeeRavi.firstName);
  }
}


getExperienceOfRavi();