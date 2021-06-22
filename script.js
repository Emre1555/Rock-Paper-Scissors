let playerScore = 0;
let computerScore = 0;

const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const items = document.querySelectorAll(".items");

const computerSelected = document.getElementById("computerSelected");
const playerSelected = document.getElementById("playerSelected");
const result = document.getElementById("result");
const score = document.getElementById("score");
const finalScore = document.getElementById("finalScore");
const finalBut = document.getElementById("finalBut");
const finalS = document.getElementById("finalS");

function computerPlay() {
  const opsArr = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  compSelect(opsArr[randomIndex]);
  return opsArr[randomIndex];
}

function compSelect(selection) {
  computerSelected.innerHTML = `Computer Selection: ${selection}`;
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      computerScore += 1;
      checkifEnded();
      return "You Lost!";
    } else if (computerSelection == "Scissors") {
      playerScore += 1;
      checkifEnded();
      return "You won!";
    } else {
      playerScore += 0;
      computerScore += 0;
      return "It's a tie";
    }
  }
  if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      computerScore += 1;
      checkifEnded();
      return "You Lost!";
    } else if (computerSelection == "Rock") {
      playerScore += 1;
      checkifEnded();
      return "You won!";
    } else {
      playerScore += 0;
      computerScore += 0;
      return "It's a tie";
    }
  }
  if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      computerScore += 1;
      checkifEnded();
      return "You Lost!";
    } else if (computerSelection == "Paper") {
      playerScore += 1;
      checkifEnded();
      return "You won!";
    } else {
      playerScore += 0;
      computerScore += 0;
      return "It's a tie";
    }
  }
}

function checkifEnded() {
  if (computerScore == 5) {
    finalScore.innerHTML = "Computer Won";
    toggleFinal();
    return;
  } else if (playerScore == 5) {
    finalScore.innerHTML = "Player Won";
    toggleFinal();
    return;
  }
}

function game(playerS) {
  if (computerScore < 5 && playerScore < 5)
    result.innerHTML = singleRound(playerS, computerPlay());
}

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    theTarget = event.target.innerHTML;
    playSelect(theTarget);
    game(theTarget);
    score.innerText = `Player ${playerScore} - Computer ${computerScore}`;
  });
});

function playSelect(selection) {
  playerSelected.innerHTML = `Player Selection: ${selection}`;
}

function toggleFinal() {
  finalS.style.display = "block ";
}

finalBut.onclick = function () {
  finalS.style.display = "none";
  window.location.reload();
};
