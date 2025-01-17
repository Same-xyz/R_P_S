function getComputerChoice() {
    const random = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
    return random === 0 ? "rock" : random === 1 ? "paper" : "scissors";
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper, or Scissors?");
    if (humanChoice === null) {
        console.log("Prompt canceled. Exiting the game.");
        return null; // Handle this null case in the game logic to exit
    }

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        console.log(`You chose: ${capitalize(humanChoice)}`);
        return humanChoice;

    } else {
        alert("Invalid choice. Please choose between Rock, Paper, or Scissors.");
        console.log("Invalid choice. Please choose between Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(humanChoice, computerChoice) {
    const isDraw = humanChoice === computerChoice;
    const playerWins = (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    );

    if (isDraw) {
        alert("It's a tie");
        tieScore++
    } else if (playerWins) {
        alert(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
        humanScore++;
    } else {
        alert(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
        computerScore++;
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const playerChoice = getHumanChoice();
        if (playerChoice === null) {
            alert("Game canceled.");
            return;
        }
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`);
    }

    const winner = humanScore === 5 ? "Player" : "Computer";
    alert(`Game Over! The ${winner} wins with a score of ${humanScore} to ${computerScore}.`);
}

playGame();
