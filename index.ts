#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter firts number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
// Conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber)
} else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber)
} else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber)
} else {
    console.log("Please select valid operator")
}