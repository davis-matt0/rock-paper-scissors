function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      console.log(`The computer picked ${computerChoice}`);
      console.log("It's a tie");
      return (tieCount += 1);
    } else if (computerChoice === "scissors") {
      console.log(`The computer picked ${computerChoice}`);
      console.log("You win!");
      return (winCount += 1);
    } else if (computerChoice === "paper") {
      console.log(`The computer picked ${computerChoice}`);
      console.log("You're a big loser HAHAHAHAHAHA");
      return (lossCount += 1);
    }
  }
  if (playerChoice === "scissors") {
    if (computerChoice === "scissors") {
      console.log(`The computer picked ${computerChoice}`);
      console.log("It's a tie");
      return (tieCount += 1);
    } else if (computerChoice === "rock") {
      console.log(`The computer picked ${computerChoice}`);
      console.log("You're a big loser HAHAHAHAHAHA");
      return (lossCount += 1);
    } else if (computerChoice === "paper") {
      console.log(`The computer picked ${computerChoice}`);
      console.log("You win!");
      return (winCount += 1);
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      console.log(`The computer picked ${computerChoice}`);
      console.log("It's a tie");
      return (tieCount += 1);
    } else if (computerChoice === "rock") {
      console.log(`The computer picked ${computerChoice}`);
      console.log("You win!");
      return (winCount += 1);
    } else if (computerChoice === "scissors") {
      console.log(`The computer picked ${computerChoice}`);
      console.log("You're a big loser HAHAHAHAHAHA");
      return (lossCount += 1);
    }
  }
}

//function game()

let winCount = 0;
let lossCount = 0;
let tieCount = 0;
const computerChoice = getComputerChoice();
const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

playRound(playerChoice, computerChoice);
