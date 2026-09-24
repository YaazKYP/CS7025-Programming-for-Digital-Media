// file condition


let playerScore = 0;

function addPlayerScore() {
  playerScore += 10;
}

function checkOddOrEven() {
  if (playerScore % 2 === 0) {
    console.log("Score is " + playerScore + ": EVEN number!");
  } else {
    console.log("Score is " + playerScore + ": ODD number!");
  }
}

addPlayerScore();
checkOddOrEven();