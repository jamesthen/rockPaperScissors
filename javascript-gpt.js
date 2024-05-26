// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Choices available in the game
const choices = ['rock', 'paper', 'scissors'];

// Function to get the computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner of a round
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Main game loop
for (let round = 1; playerScore < 5 && computerScore < 5; round++) {
    // Get player's choice
    let playerChoice = prompt(`Round ${round}: Choose rock, paper, or scissors:`).toLowerCase();

    // Validate player's choice
    while (!choices.includes(playerChoice)) {
        playerChoice = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase();
    }

    // Get computer's choice
    const computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);

    // Determine the winner of the round
    const winner = determineWinner(playerChoice, computerChoice);

    if (winner === 'player') {
        playerScore++;
        console.log(`You win this round! Score: Player ${playerScore} - Computer ${computerScore}`);
    } else if (winner === 'computer') {
        computerScore++;
        console.log(`Computer wins this round. Score: Player ${playerScore} - Computer ${computerScore}`);
    } else {
        console.log(`It's a draw. Score: Player ${playerScore} - Computer ${computerScore}`);
    }
}

// Announce the final winner
if (playerScore === 5) {
    console.log("Congratulations! You won the game!");
} else {
    console.log("Sorry, the computer won the game.");
}