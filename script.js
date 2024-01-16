const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.querySelector("#results");
const result = document.createElement("h2");

div.appendChild(result);

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

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
      if (winCount === 5) {
        alert("You win!");
        winCount = 0;
        lossCount = 0;
      } else if (lossCount === 5) {
        alert("L + ratio + ur bald");
        winCount = 0;
        lossCount = 0;
      }
      return winCount;
    } else if (computerChoice === "paper") {
      lossCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      if (winCount === 5) {
        winCount += 1;
        alert("You win!");
      } else if (lossCount === 5) {
        lossCount += 1;
        1;
        alert("L + ratio + ur bald");
        winCount = 0;
        lossCount = 0;
      }
      return lossCount;
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
      if (winCount === 5) {
        alert("You win!");
        winCount = 0;
        lossCount = 0;
      } else if (lossCount === 5) {
        alert("L + ratio + ur bald");
        winCount = 0;
        lossCount = 0;
      }
      return lossCount;
    } else if (computerChoice === "paper") {
      winCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      if (winCount === 5) {
        alert("You win!");
        winCount = 0;
        lossCount = 0;
      } else if (lossCount === 5) {
        alert("L + ratio + ur bald");
        winCount = 0;
        lossCount = 0;
      }
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
      if (winCount === 5) {
        alert("You win!");
        winCount = 0;
        lossCount = 0;
      } else if (lossCount === 5) {
        alert("L + ratio + ur bald");
        winCount = 0;
        lossCount = 0;
      }
      return winCount;
    } else if (computerChoice === "scissors") {
      lossCount += 1;
      result.innerText = `You picked ${playerChoice}
      The computer picked ${computerChoice}

      You: ${winCount}
      Computer: ${lossCount}`;
      if (winCount === 5) {
        alert("You win!");
        winCount = 0;
        lossCount = 0;
      } else if (lossCount === 5) {
        alert("L + ratio + ur bald");
        winCount = 0;
        lossCount = 0;
      }
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

function game() {
  while (winCount < 5 || lossCount < 5) {
    playRound(playerChoice, computerChoice);
    if (winCount === 5) {
      alert("You win!");
      winCount = 0;
      lossCount = 0;
    } else if (lossCount === 5) {
      alert("L + ratio + ur bald");
      winCount = 0;
      lossCount = 0;
    }
  }
}
