//Gets Computer Choice
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
    return random === 0 ? "rock" : random === 1 ? "paper" : "scissors";
}

//Captitalizes the first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

// Runs a single round
function playRound(humanChoice, computerChoice) {
    const isDraw = humanChoice === computerChoice;
    const playerWins = (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    );

    //Update Scores
    isDraw
    ? console.log("It's a tie") || tieScore++
    : playerWins
        ? console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`) || humanScore++
        : console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`) || computerScore++;
    updateScores();
}

// Checks if winning conditons are met
function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "Player" : "Computer";
        alert(`Game Over! The ${winner} wins with a score of ${humanScore} to ${computerScore}.`);
        // Reset scores after game over
        humanScore = 0;
        computerScore = 0;
        tieScore = 0;
        updateScores();
    }
}

// Domjs

const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");

const playBoard = document.querySelectorAll(".playerBoard img")

playBoard.forEach(img => {
    img.addEventListener("click", (e)=>{
        const humanChoice = e.target.id;
        const computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}, computer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`);
        checkGameOver();
    })
    
});

function updateScores(){
    document.querySelector(".humanScore span").textContent = humanScore;
    document.querySelector(".computerScore span").textContent = computerScore;
    document.querySelector(".tieScore span").textContent = tieScore;
}

img.addEventListener("click", (e) => {
    const humanChoice = e.target;
    humanChoice.classList.add("selected");
    setTimeout(() => humanChoice.classList.remove("selected"), 500);
});

