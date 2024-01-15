const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.querySelector("#results");
const result = document.createElement("h2");
const score = document.createElement("h3");

div.appendChild(result);
div.appendChild(score);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      tieCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}
      
      You: ${winCount}
      Computer: ${lossCount}`;
      return tieCount;
    } else if (computerChoice === "scissors") {
      winCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      return winCount;
    } else if (computerChoice === "paper") {
      lossCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
    }
  }
  if (playerChoice === "scissors") {
    if (computerChoice === "scissors") {
      tieCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      return tieCount;
    } else if (computerChoice === "rock") {
      lossCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      return lossCount;
    } else if (computerChoice === "paper") {
      winCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      return winCount;
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      tieCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      return tieCount;
    } else if (computerChoice === "rock") {
      winCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      return winCount;
    } else if (computerChoice === "scissors") {
      lossCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      return lossCount;
    }
  }
}

rock.addEventListener("click", function () {
  let playerChoice = "rock";
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
});

paper.addEventListener("click", () => {
  let playerChoice = "paper";
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
});

scissors.addEventListener("click", () => {
  let playerChoice = "scissors";
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
});

// function game() {
//   while (winCount < 3 && lossCount < 3) {
//     const computerChoice = getComputerChoice();
//     const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
//     playRound(playerChoice, computerChoice);
//   }
//   if (winCount === 3) {
//     console.log("You won the best of 5 :)");
//   } else if (lossCount === 3) {
//     console.log("The computer won the best of 5 :(");
//   }
// }

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

// game();
