const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
  const number = Math.random();
  if (number < 0.33) return "rock";
  if (number > 0.66) return "paper";
  else return "scissors";
}

function UpdateScore() {
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

function endGame() {
  GameOver = true;
  winnerDiv.textCOntent =
    humanScore === 5 ? "You won the game!" : "Computer won the game!";

  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function playRound(humanChoice, computerChoice) {
  if (gameOver) return;

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `It's a draw! Both chose ${computerChoice}.`;
    UpdateScore();
    return;
  }
  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    humanScore += 1;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore += 1;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  UpdateScore();

  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
