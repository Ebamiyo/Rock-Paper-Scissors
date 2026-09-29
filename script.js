function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  let computerAnswer = "";
  if (computerChoice == 0) {
    computerAnswer = "rock";
  } else if (computerChoice == 1) {
    computerAnswer = "scissors";
  } else if (computerChoice == 2) {
    computerAnswer = "paper";
  }
  return computerAnswer;
}

function getHumanChoice() {
  let humanChoice = prompt("Your turn", "").toLowerCase();
  return humanChoice;
}

let humanScore = 0;

let computerScore = 0;

function playRound(human, computer) {
  if (human == "rock" && computer == "paper") {
    console.log("Human loses! Paper beats Rock! ");
    computerScore += 1;
  } else if (human == "paper" && computer == "rock") {
    console.log("Computer loses! Paper beats Rock!");
    humanScore += 1;
  } else if (human == "rock" && computer == "scissors") {
    console.log("Computer loses! Rock beats Scissors!");
    humanScore += 1;
  } else if (human == "scissors" && computer == "rock") {
    console.log("Human loses! Rock beats Scissors!");
    computerScore += 1;
  } else if (human == "scissors" && computer == "paper") {
    console.log("Computer loses! Scissors beats Paper!");
    humanScore += 1;
  } else if (human == "paper" && computer == "scissors") {
    console.log("Human loses! Scissors beats Paper!");
    computerScore += 1;
  } else if (human == computer) {
    humanScore -= 0;
    computerScore -= 0;
    console.log("Its a tie,");
  }
}

let computerTotal = 0;
let humanTotal = 0;

function playGame() {
  let i = 1;
  while (i <= 5) {
    let round = i;
    console.log(`Round ${round}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    i++;
  }
  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log(`Human Wins with ${humanScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Human Wins with ${computerScore}`);
  }
}

playGame();
