import inquirer from 'inquirer';
async function main() {
    let playAgain = true;
    while (playAgain) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        // Uncomment the next line if you want to debug the random number
        // console.log(`Random number (for debugging): ${randomNumber}`);
        const { GuessNumber } = await inquirer.prompt([{
                name: "GuessNumber",
                type: "number",
                message: "Please guess a number between 1 and 6",
                validate: (value) => {
                    if (!isNaN(value) && value >= 1 && value <= 6) {
                        return true;
                    }
                    else {
                        return "Please enter a number between 1 and 6";
                    }
                }
            }]);
        if (GuessNumber === randomNumber) {
            console.log("Congratulations! You have guessed the right number.");
        }
        else {
            console.log(`Sorry! You guessed the wrong number. The correct number was ${randomNumber}.`);
        }
        const { playAgain: playAgainAnswer } = await inquirer.prompt([{
                name: "playAgain",
                type: "confirm",
                message: "Do you want to play again?",
                default: true
            }]);
        playAgain = playAgainAnswer;
    }
    console.log("Thanks for playing! Goodbye.");
}
main();
