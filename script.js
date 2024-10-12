function getComputerChoice(){ //Function to generate random
    const random = Math.floor(Math.random() * 3);//Generates a number beetween 0 and 2
    return random === 0 ? "Rock": random === 1 ? "Paper": "Scissors";
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

 function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper or Scissors ?");
    humanChoice = humanChoice ? humanChoice.toLowerCase(): "";
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ){
        console.log(`You chose: ${capitalize(humanChoice)}`);
        return humanChoice;
    } else{
        console.log("Invalid choice. Please chose between Rock, Paper, or Scissors. ");
        return getHumanChoice();
    }
}

const choice = getHumanChoice();
console.log(`Your choice is : ${capitalize(choice)}`);

let humanScore = 0;
let computerScore = 0;

//Function that takes in human and computerchoices as arguments
function playRound(humanChoice, computerChoice) {
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
    else if(
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ){
    alert(`You lose, Computer plays ${computerChoice} which beats ${humanChoice}`);
    console.log(`Computer wins, computer plays ${computerChoice}`);
    computerScore++;
} else{
    console.log("Invalid choice. Please chose between Rock, Paper, or Scissors. ");
}
}
// playRound(getHumanChoice(), getComputerChoice());

function playGame() {
    for (let i = 0; i < 5; i++){
    playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the gave with ascore of ${humanScore} to ${computerScore}`)
        alert(`Congratulations! You won the gave with ascore of ${humanScore} to ${computerScore}`)
    }else if (computerScore > humanScore) {
        console.log(`Congratulations! You won the gave with ascore of ${computerScore} to ${humanScore}`)
        alert(`Congratulations! You won the gave with ascore of ${computerScore} to ${humanScore}`)
    } else {
        console.log(`The game ended in a tie with both at ${humanScore}`)
        alert(`The game ended in a tie with both at ${humanScore}`)
    }
}
playGame();
