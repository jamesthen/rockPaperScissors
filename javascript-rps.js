console.log('Hello world!')

function getComputerChoice() {
    let x = Math.random() * 100;
    console.log(x + " Random Number Gen");
    if (x <= 33.33) {
        console.log("computer picks rock");
        return "rock";
    } else if (x >= 33.34 && x <= 66.67) {
        console.log("computer picks paper");
        return "paper";
    } else {
        console.log("computer picks scissor");
        return "scissor";
    }
}

function getHumanChoice() {
    let userPrompt = window.prompt("Rock paper scissor say what?");
    let lowerCaseInput = userPrompt.toLowerCase();
    if (lowerCaseInput == "rock") {
        console.log("player picks rock");
        return "rock";
    } else if (lowerCaseInput == "paper") {
        console.log("player picks paper");
        return "paper";
    } else if (lowerCaseInput == "scissor") {
        console.log("player picks scissor");
        return "scissor";
    } else {
        console.log("You need to pick rock, paper, or scissor");
    }
}

let humanChoice = undefined;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;
function gameScore(){
    console.log("Human Score: " + humanScore + " | " + "Computer Score: " + computerScore);
}

console.log(humanChoice);

gameScore();

function playGame(){
    if (humanScore || computerScore !== 5) {
    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice) {
            console.log("DRAW!!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("Your rock lost to paper, so sad.");
            computerScore++;
            return gameScore()
        } else if (humanChoice === "rock" && computerChoice === "scissor") {
            console.log("Your rock beats scissors, nice!");
            humanScore++;
            return gameScore()
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Your paper beats rock, nice!");
            humanScore++;
            return gameScore()
        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            console.log("Your paper lost to scissors, you lose!");
            computerScore++;
            return gameScore()
        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            console.log("Your scissors lost to rock, you lose, so sad :(");
            computerScore++;
            return gameScore()
        } else if (humanChoice === "scissor" && computerChoice === "paper") {
            console.log("Your scissors beats paper, nice!");
            humanScore++;
            return gameScore()
        } else if (humanScore == 5) {
            console.log("Winner winner chicken dinner! You won! 5 pts!");
            return gameScore()
        } else if (computerScore == 5) {
            console.log("You lose loser1 Computer gets 5 pts");
            return gameScore()
        }
    }
}
    playRound(humanSelection, computerSelection);
}