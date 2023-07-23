const countPlayer = document.querySelector(".player");
const pSElement = document.createElement("div");
pSElement.setAttribute("id", "playerCount");
pSElement.textContent = 0;
pSElement.style.fontSize = "80px";
pSElement.style.padding = "20px";
countPlayer.appendChild(pSElement);

const countComputer = document.querySelector(".comp");
const cSElement = document.createElement("div");
cSElement.setAttribute("id", "compCount");
cSElement.textContent = 0;
cSElement.style.fontSize = "80px";
cSElement.style.padding = "20px";
countComputer.appendChild(cSElement);

function createMessage(message) {
  const messageContainer = document.querySelector("#message");
  messageContainer.textContent = message;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    playerScore++;
    computerScore++;
    document.getElementById("playerCount").innerHTML = `${playerScore}`;
    document.getElementById("compCount").innerHTML = `${computerScore}`;
    createMessage("It was a draw");
    move("motorbike");
    move("police");
    return;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    document.getElementById("playerCount").innerHTML = `${playerScore}`;
    move("motorbike");
    createMessage("You win! (rock beats scissors)");
    return;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    document.getElementById("playerCount").innerHTML = `${playerScore}`;
    createMessage("You win! (paper beats rock)");
    move("motorbike");
    return;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    document.getElementById("playerCount").innerHTML = `${playerScore}`;
    createMessage("You win! (scissors beats paper)");
    move("motorbike");
    return;
  } else {
    computerScore++;
    document.getElementById("compCount").innerHTML = `${computerScore}`;
    createMessage(
      "You lose (" + computerSelection + " beats " + playerSelection + ")"
    );
    move("police");
    return;
  }
}
function move(image) {
  let step = 100;
  let position = document.getElementById(image).offsetLeft;
  position -= step;
  document.getElementById(image).style.left = position + "px";
}
function reset() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("compCount").innerHTML = `${computerScore}`;
  document.getElementById("playerCount").innerHTML = `${playerScore}`;
  document.getElementById("motorbike").style.left = "500px";
  document.getElementById("police").style.left = "750px";
  createMessage("");
}
function gameEnd() {
  if (playerScore === 5) {
    move("motorbike");
    createMessage("You got away");
    reset();
  } else if (computerScore === 5 || computerScore == playerScore + 2) {
    createMessage("You got caught");
    reset();
  }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    function computerMath() {
      return Math.floor(Math.random() * 3 + 1);
    }
    const computerNumber = computerMath();
    function getComputerChoice(computerResult) {
      if (computerResult === 1) {
        return "rock";
      } else if (computerResult === 2) {
        return "paper";
      } else {
        return "scissors";
      }
    }
    playRound(button.id, getComputerChoice(computerNumber));
    gameEnd();
  });
});
