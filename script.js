function getComputerChoice(){ //Function to generate random
    const random = Math.floor(Math.random() * 3);//Generates a number beetween 0 and 2
    return random === 0 ? "rock": random === 1 ? "paper": "scissors";
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

 function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper or Scissors ?");
    if (humanChoice === null) {
        console.log("Prompt canceled. Exiting the game.");
        return null; // Handle this null case in the game logic to exit
    }
    humanChoice = humanChoice.toLowerCase(); ;
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ){
        console.log(`You chose: ${capitalize(humanChoice)}`);
        return humanChoice;
    } else{
        console.log("Invalid choice. Please chose between Rock, Paper, or Scissors. ");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

//Function that takes in human and computerchoices as arguments
function playRound(humanChoice, computerChoice) {
    if (!humanChoice) return; // Exit the round if the human choice is null
    humanChoice = humanChoice.toLowerCase();
// Draw/tie Condition
    if (humanChoice === computerChoice){
        alert("It's a tie");
        console.log(`It's a tie! Both chose ${capitalize(humanChoice)}. `)
    }
    //Player win condition
    else if(
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ){
        alert(`You win, you played ${humanChoice} which beats ${computerChoice}`);
        console.log(`You win, you played ${humanChoice}`);
        humanScore++;
    }
    //Computer Win Condition
    else{
    alert(`You lose, Computer plays ${computerChoice} which beats ${humanChoice}`);
    console.log(`Computer wins, computer plays ${computerChoice}`);
    computerScore++; }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        if (humanChoice === null) {
            console.log("Game canceled.");
            alert("Game canceled.");
            return; }// Exit the game if the user cancels
        playRound(humanChoice, computerChoice);
    }
    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with ascore of ${humanScore} to ${computerScore}`)
        alert(`Congratulations! You won the game with ascore of ${humanScore} to ${computerScore}`)
    }else if (computerScore > humanScore) {
        console.log(`Congratulations! You lost with a score of ${computerScore} to ${humanScore}`)
        alert(`Congratulations! You lost with a score of ${computerScore} to ${humanScore}`)
    } else {
        console.log(`The game ended in a tie with both at ${humanScore}`)
        alert(`The game ended in a tie with both at ${humanScore}`)
    }
}

playGame();
