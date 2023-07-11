function computerMath() {
  return Math.floor(Math.random() * 3 + 1); // chooses a random number between 1-3
}
const computerNumber = computerMath();
//console.log(computerNumber)

function getComputerChoice(computerResult) {
  // once random number is selected a hand is chosen
  if (computerResult === 1) {
    return "rock";
  } else if (computerResult === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
//console.log(getComputerChoice(computerNumber))

const computerSelection = getComputerChoice(computerNumber);
const playerSelection = playerInput.toLowerCase();
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    alert("It was a draw");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    alert("You win! (rock beats scissors)");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("You win! (paper beats rock)");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    alert("You win! (scissors beats paper)");
  } else {
    alert("You lose (" + computerSelection + " beats " + playerSelection + ")");
  }

  console.log(playRound(playerSelection, computerSelection));
  playerInput = prompt("Paper, Scissors or Rock");
}
