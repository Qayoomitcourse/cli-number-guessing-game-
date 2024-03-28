import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 6 +1)

const answers = await inquirer.prompt([
{name: "userGuessNumber",
type: "number",
message: "Please guess a number from 1-6"}
])

if (answers.userGuessNumber === randomNumber ) {
    console.log("Congratulation! you have gueesed write number")
} else {console.log("you guess wrong number")}
console.log(`Correct Number ${randomNumber}`)
