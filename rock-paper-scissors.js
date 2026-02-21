let randomNumber = Math.random();
function getComputerChoice(randomNumber) {
  if (randomNumber < 0.33) {
    return "rock";
  }
  if (randomNumber > 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("rock, paper, or scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === "rock") {
    if (computerChoice === "scissors")
      console.log(
        "You win! " + computerChoice + " beats " + humanChoice.toLowerCase(),
      );
    if (computerChoice === "paper")
      console.log(
        "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase(),
      );
    if (computerChoice === "rock")
      console.log(
        "It's a draw! " +
          computerChoice +
          " beats " +
          humanChoice.toLowerCase(),
      );
  }
  if (humanChoice.toLowerCase() === "paper") {
    if (computerChoice === "rock")
      console.log(
        "You win! " + computerChoice + " beats " + humanChoice.toLowerCase(),
      );
    if (computerChoice === "scissors")
      console.log(
        "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase(),
      );
    if (computerChoice === "paper")
      console.log(
        "It's a draw! " +
          computerChoice +
          " beats " +
          humanChoice.toLowerCase(),
      );
  }
  if (humanChoice.toLowerCase() === "scissors") {
    if (computerChoice === "paper")
      console.log(
        "You win! " + computerChoice + " beats " + humanChoice.toLowerCase(),
      );
    if (computerChoice === "rock")
      console.log(
        "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase(),
      );
    if (computerChoice === "scissors")
      console.log(
        "It's a draw! " +
          computerChoice +
          " beats " +
          humanChoice.toLowerCase(),
      );
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(randomNumber);

playRound(humanSelection, computerSelection);
