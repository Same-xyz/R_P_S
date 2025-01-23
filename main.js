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
    const ResultMessage = isDraw
        ? (tieScore++, "It's a tie")
        : playerWins
        ? (humanScore++, `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`)
        : (computerScore++, `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
        updateScores();
        console.log (ResultMessage);

    const resultDisplay = document.querySelector(".scoreBoard .score span");
    if (humanScore === 5 || computerScore === 5) {
        resultDisplay.textContent = `Game Over! The ${humanScore === 5 ? "Player" : "Computer"} wins with a score of ${humanScore} to ${computerScore}.`;
    }
    else {
        resultDisplay.textContent = `Score: ${ResultMessage}`;
}
}

    function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "Player" : "Computer";
        console.log(`Game Over! The ${winner} wins with a score of ${humanScore} to ${computerScore}.`);
        // Reset scores after game over
        humanScore = 0;
        computerScore = 0;
        tieScore = 0;
        updateScores();
    }
}

const computerImage = document.querySelector("#compImage")
// Shows Computer Choice
function showCompChoice(choice){
    computerImage.src = `images/${choice}-svgrepo-com.svg`;
    computerImage.classList.add("animate");
    setTimeout(() => {
        computerImage.src = "images/computer-virus-1-svgrepo-com.svg"
        computerImage.classList.remove("animate");
    }, 1000);

}

// Domjs
const playBoard = document.querySelectorAll(".playerBoard img")
playBoard.forEach(img => {
    img.addEventListener("click", (e)=>{
        const humanChoiceElement = e.target;
        humanChoiceElement.classList.add("selected");
        setTimeout(() => humanChoiceElement.classList.remove("selected"), 500);

        const humanChoice = e.target.id;
        const computerChoice = getComputerChoice();

        showCompChoice(computerChoice);
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

