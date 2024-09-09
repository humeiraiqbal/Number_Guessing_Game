#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random());
console.log(randomNumber * 6 + 1);
let answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number."
    }]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guess the correct number.");
}
else {
    console.log("OOps! Try again");
}
