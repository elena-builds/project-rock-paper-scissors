function getComputerChoice() {
  let number = Math.random();
  if (number < 0.33) {
    return "rock";
  } else if (number > 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("rock, paper, or scissors?");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock") {
      if (computerChoice === "scissors")
        (console.log(
          "You win! " + computerChoice + " beats " + humanChoice.toLowerCase(),
        ),
          (humanScore += 1));
      if (computerChoice === "paper")
        (console.log(
          "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase(),
        ),
          (computerScore += 1));
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
        (console.log(
          "You win! " + computerChoice + " beats " + humanChoice.toLowerCase(),
        ),
          (humanScore += 1));
      if (computerChoice === "scissors")
        (console.log(
          "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase(),
        ),
          (computerScore += 1));
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
        (console.log(
          "You win! " + computerChoice + " beats " + humanChoice.toLowerCase(),
        ),
          (humanScore += 1));
      if (computerChoice === "rock")
        (console.log(
          "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase(),
        ),
          (computerScore += 1));
      if (computerChoice === "scissors")
        console.log(
          "It's a draw! " +
            computerChoice +
            " beats " +
            humanChoice.toLowerCase(),
        );
    }
  }

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (humanScore > computerScore) {
    console.log("Congratulations! You Win");
  } else if (humanScore < computerScore) {
    console.log("You lose. Try again!");
  } else {
    console.log("Same score! Try again?");
  }
}

playGame();

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  console.log("rock clicked");
});

paperBtn.addEventListener("click", () => {
  console.log("paper clicked");
});

scissorsBtn.addEventListener("click", () => {
  console.log("scissors clicked");
});
