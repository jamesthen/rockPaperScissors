let playerScore = 0;
let computerScore = 0;
let computerChoice = "";
let playerChoice = "";

const btn = document.querySelectorAll('button');
const playerScoreMsg = document.getElementById('playerscore');
const computerScoreMsg = document.getElementById('computerscore');
const message = document.getElementById('message');

const getComputerChoice = (e) => {
    const randomNum = Math.random() * 100;
    if (randomNum <= 33.3) {
        computerChoice = "rock";
        return "rock";
    } else if (randomNum >= 66.6 ) {
        computerChoice = "paper";
        return "paper";
    } else {
        computerChoice = "scissor";
        return "scissor";
    };
}

const roundWinner = () => {
    if (playerChoice == computerChoice) {
        console.log("Draw, no winner");
        return "Draw no winner";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        playerScore++;
        console.log("Player Scores!");
        return "Player Scores"
    } else {
        computerScore++;
        console.log("Computer Scores!");
        return "Computer Scores"
    }
}


const playRound = (e) => {

    playerChoice = e.target.value;
    playerScoreMsg.textContent = `Player picks ${playerChoice}`
    getComputerChoice();
    computerScoreMsg.textContent = `Computer picks ${getComputerChoice()}`
    roundWinner(playerChoice, computerChoice);
    message.textContent = `Current scores: Player - ${playerScore} || Computer - ${computerScore}`;

    if (playerScore === 5) {
        message.textContent = 'Player wins!';
        disableButtons();
    } else if (computerScore === 5) {
        message.textContent = 'Computer wins!';
        disableButtons();
    }
};


const disableButtons = () => {
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => btn.disabled = true);
};


btn.forEach(btn => btn.addEventListener('click', playRound));



// click roundStart
// Get player/computer choices
// game (for) loop => round, FALSE condition === score of 5, increment rounds 
// determine winner function with 2 args [player + computer choice] > returns winner
// if statement on incrementing score and expressing round winner
// [outside of game look] if statement on winner === 5

//PLay round
//Get player choice && get computer choice
//Determine who wins
//increment their score
//The loop 
//Check score if its 5 determine winner