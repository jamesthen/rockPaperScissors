humanScore = 0;
computerScore = 0;

const button = document.querySelectorAll("button");
let humanChoice = "";
button.forEach(button => {
    button.addEventListener('click', (event) => {
        humanChoice = event.target.id;
        console.log("Human picks: " + humanChoice);
    });
});

choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

const computerChoice = getComputerChoice();
console.log("Computer picks: " + computerChoice);

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            return "human";
        } else {
            return "computer";
        }
};

// for (let round = 1; humanScore < 5 && computerScore < 5; round++) {
//     return null;
// }
// execute at player's choice
// for loop w/ condition playerScore = 5 win
// learn more about loops