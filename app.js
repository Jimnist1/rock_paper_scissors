let playerScore = 0;
let computerScore = 0;

function createEnding(source) {
  const gifContainer = document.querySelector(source);
  gifContainer.style.visibility = "visible";
}
function resetEnding(source) {
  const gifContainer = document.querySelector(source);
  gifContainer.style.visibility = "hidden";
}
function createEndingMessage(message) {
  const messageEndingContainer = document.querySelector("#messageEnding");
  messageEndingContainer.textContent = message;
}
function createMessage(message) {
  const messageContainer = document.querySelector("#message");
  messageContainer.textContent = message;
}
function createReset(message) {
  const buttonContainer = document.querySelector("#resetButton");
  buttonContainer.textContent = message;
  if (message == "") {
    buttonContainer.style.visibility = "hidden";
  } else buttonContainer.style.visibility = "visible";
}

function wheelie() {
  const wheelieMoto = document.getElementById("motorbike");
  wheelieMoto.style.transform = "rotate(10deg) scaleX(-1)";
  wheelieMoto.style.transform.origin = "bottom right";
}
function wheelieEnd() {
  const wheelieMoto = document.getElementById("motorbike");
  wheelieMoto.style.transform = "scaleX(-1)";
}
function playAudio(sound) {
  let mySound = new Audio(sound);
  mySound.volume = 0.1;
  mySound.play();
}
function move(image) {
  if (image == "motorbike") {
    wheelie();
    playAudio("sounds/motorbike.mp3");
  }
  let step = 120;
  let position = document.getElementById(image).offsetLeft;
  position -= step;
  document.getElementById(image).style.left = position + "px";
  setTimeout(wheelieEnd, 500);
}

function upper(word) {
  uppercase = word.toUpperCase();
  return;
}
function computerMath() {
  return Math.floor(Math.random() * 3 + 1);
}
function getComputerChoice(computerResult) {
  if (computerResult === 1) {
    return "rock";
  } else if (computerResult === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "resetButton") {
    reset();
  } else if (playerSelection == computerSelection) {
    playerScore++;
    computerScore++;
    document.getElementById("playerCount").textContent = `${playerScore}`;
    document.getElementById("compCount").textContent = `${computerScore}`;
    move("motorbike");
    move("police");
    createMessage("It was a draw");
    return;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    document.getElementById("playerCount").textContent = `${playerScore}`;
    move("motorbike");
    createMessage("You Win! (rock > scissors)");
    return;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    document.getElementById("playerCount").textContent = `${playerScore}`;
    move("motorbike");
    createMessage("You Win! (paper > rock)");
    return;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    document.getElementById("playerCount").textContent = `${playerScore}`;
    move("motorbike");
    createMessage("You Win! (scissors > paper)");
    return;
  } else {
    computerScore++;
    document.getElementById("compCount").textContent = `${computerScore}`;
    move("police");
    createMessage(
      "You Lose! (" + computerSelection + " > " + playerSelection + ")"
    );
    return;
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("compCount").textContent = `${computerScore}`;
  document.getElementById("playerCount").textContent = `${playerScore}`;
  document.getElementById("motorbike").style.left = "500px";
  document.getElementById("police").style.left = "750px";
  createMessage("");
  createReset("");
  resetEnding("#gameEndWin");
  resetEnding("#gameEndLose");
  createEndingMessage("");
  enableButtons();
}
function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.id != "resetButton") button.classList.add("disabled");
  });
}
function enableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.id != "resetButton") button.classList.remove("disabled");
  });
}

function gameEnd() {
  if (playerScore === 5) {
    disableButtons();
    move("motorbike");
    createEnding("#gameEndWin");
    createReset("Play Again");
    createEndingMessage("You Escaped!");
  } else if (computerScore === 5 || computerScore >= playerScore + 2) {
    disableButtons();
    createEnding("#gameEndLose");
    createReset("Play Again");
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    computerMath();
    const computerNumber = computerMath();
    playRound(button.id, getComputerChoice(computerNumber));
    gameEnd();
  });
});
