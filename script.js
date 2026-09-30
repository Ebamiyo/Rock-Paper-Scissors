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
  let humanChoice = prompt("Rock, Paper, Scissors...Shoot!", "").toLowerCase();
  return humanChoice;
}

let humanScore = 0;

let computerScore = 0;
let commentary = "";
let winner = "";

function playRound(human, computer) {
  if (human == "rock" && computer == "paper") {
    commentary = `Human played: ${human} Computer played: ${computer}.
    Human loses! Paper beats Rock!`;
    computerScore += 1;
  } else if (human == "paper" && computer == "rock") {
    commentary = `Human played: ${human}. Computer played: ${computer}.
    Computer loses! Paper beats Rock!`;
    humanScore += 1;
  } else if (human == "rock" && computer == "scissors") {
    commentary = `Human played: ${human}. Computer played: ${computer}.
    Computer loses! Rock beats Scissors!`;
    humanScore += 1;
  } else if (human == "scissors" && computer == "rock") {
    commentary = `Human played: ${human}. Computer played: ${computer}.
    Human loses! Rock beats Scissors!`;
    computerScore += 1;
  } else if (human == "scissors" && computer == "paper") {
    commentary = `Human played: ${human}. Computer played: ${computer}.
    Computer loses! Scissors beats Paper!`;
    humanScore += 1;
  } else if (human == "paper" && computer == "scissors") {
    commentary = `Human played: ${human}. Computer played: ${computer}.
    Human loses! Scissors beats Paper!`;
    computerScore += 1;
  } else if (human == computer) {
    humanScore -= 0;
    computerScore -= 0;
    commentary = "Its a tie.";
  }
  let roundOutput = `${commentary}

  Human: ${humanScore}, Computer: ${computerScore}`;
  return roundOutput;
}

const buttons = document.querySelectorAll("button");
const div = document.querySelector("#results-div");
const winnerDeclarationDiv = document.querySelector("#winners-div");
const winnerDeclaration = document.createElement("p");
winnerDeclaration.setAttribute("class", "winner-declaration");

const resetDiv = document.querySelector(".reset-div");

const resetLink = document.createElement("a");
resetLink.setAttribute("href", "/");
resetLink.setAttribute("class", "reset-link");
resetLink.textContent = "Reset";

for (let button of buttons) {
  button.addEventListener("click", (event) => {
    const buttonText = event.target.id;
    let resultsOutputs = playRound(buttonText, getComputerChoice());
    console.log(resultsOutputs);
    const resultsParagraph = document.createElement("p");
    resultsParagraph.textContent = resultsOutputs;
    div.appendChild(resultsParagraph);
    if (humanScore == 5 || computerScore == 5) {
      if (humanScore > computerScore) {
        console.log(`Human Wins with ${humanScore}`);
        winnerDeclaration.textContent = `Human Wins with ${humanScore} points`;
      } else if (computerScore > humanScore) {
        console.log(`Human Wins with ${computerScore}`);
        winnerDeclaration.textContent = `Human Wins with ${computerScore} points`;
      }
      // resetDiv.appendChild(resetLink);
      winnerDeclarationDiv.appendChild(winnerDeclaration);
      winnerDeclaration.appendChild(resetLink);
    }
  });
}

let computerTotal = 0;
let humanTotal = 0;

// function playGame() {
//   let i = 1;
//   while (i <= 5) {
//     let round = i;
//     console.log(`Round ${round}`);
//     playRound(getHumanChoice(), getComputerChoice());
//     console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
//     i++;
//   }
//   console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
//   if (humanScore > computerScore) {
//     console.log(`Human Wins with ${humanScore}`);
//   } else if (computerScore > humanScore) {
//     console.log(`Human Wins with ${computerScore}`);
//   }
// }

// playGame();
