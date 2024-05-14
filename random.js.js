const maxAttempts = 5;
let attempts = 0;
var secretNumber=25;
function startGame() {
    while (attempts < maxAttempts) {  
        const guess = parseInt(prompt("Guess the number between 1 and 30:"));
        attempts++;
        if (guess === secretNumber) {
            alert("Congratulations! You've guessed the number!");
            return;
        } else if (guess < secretNumber) {
            alert("The number is low");
        } else {
            alert("The number is high");
        }
    }
 
}
startGame();