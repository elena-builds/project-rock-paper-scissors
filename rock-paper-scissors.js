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
console.log(getComputerChoice(randomNumber));
