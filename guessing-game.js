function guessingGame() {
    let answer = Math.floor(Math.random() * 100);
    let guessCount = 0;
    let gameOver = false;

    return function check(guess) {
        if(gameOver) return "The game is over, you already won!";
        guessCount++;

        if(guess == answer) {
            gameOver = true;
            return `You win! You found ${answer} in ${guessCount} guesses.`;
        } else if (guess > answer) {
            return `${guess} is too high!`;
        } else { // guess < answer
            return `${guess} is too low!`;
        }
    }

}

module.exports = { guessingGame };
