let playerScore = 0;
let computerScore = 0;
let computerChoice = "";
let playerChoice = "";

const getComputerChoice = (e) => {
    const randomNum = Math.random() * 100;
    if (randomNum <= 33.3) {
        computerChoice = "rock"
    } else if (randomNum >= 66.6 ) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissor";
    };
    console.log(`randomNum: ${randomNum}`);
    console.log(`computerChoice: ${computerChoice}`);
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
    getComputerChoice();
    console.log(`PlayerChoice: ${playerChoice}`);
    roundWinner(playerChoice, computerChoice);
    message.textContent = `Current scores: Player - ${playerScore} || Computer - ${computerScore}`;
    console.log(`Current scores: Player - ${playerScore} || Computer - ${computerScore}`);

    if (playerScore === 5) {
        console.log(`Player wins!`);
        disableButtons();
    } else if (computerScore === 5) {
        console.log('Sorry, the computer won the game.');
        
        disableButtons();
    }
};


const disableButtons = () => {
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => btn.disabled = true);
};

const btn = document.querySelectorAll('button');
btn.forEach(btn => btn.addEventListener('click', playRound));
const playerScoreMsg = document.querySelector('#playerscore');
const ComputerScoreMsg = document.querySelector('#computerscore');
const message = document.querySelector('#message');


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