
function computerPlay() {
    const opsArr = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return opsArr[randomIndex];
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection == "Scissors") {
      return "You win! Rock beats Scissors";
    } else {
      return "It's a tie";
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "Scissors") {
      return "You Lose! Scissors beat Paper";
    } else if (computerSelection == "Rock") {
      return "You win! Paper beats Rock";
    } else {
      return "It's a tie";
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "Rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection == "Paper") {
      return "You win! Scissors beat Paper";
    } else {
      return "It's a tie";
    }
  }
}

function game(){
    for(let i=1; i<6; i++ ){
      console.log(singleRound(playerSelect(), computerPlay()))        
    }
}

function playerSelect(){
    let selection = window.prompt("Rock, Paper or Scissors?")
    return selection.toLowerCase()
}

game()