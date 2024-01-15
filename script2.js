const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerChoice = "rock";
    });
  });
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      console.log(`You picked ${playerChoice}`);
      console.log(`The computer picked ${computerChoice}`);
      console.log("It's a tie");
      tieCount += 1;
      console.log(`
      You: ${winCount}
      Computer: ${lossCount}`);
      return tieCount;
    } else if (computerChoice === "scissors") {
      console.log(`You picked ${playerChoice}`);
      console.log(`The computer picked ${computerChoice}`);
      console.log("You win!");
      winCount += 1;
      console.log(`
      You: ${winCount}
      Computer: ${lossCount}`);
      return winCount;
    } else if (computerChoice === "paper") {
      console.log(`You picked ${playerChoice}`);
      console.log(`The computer picked ${computerChoice}`);
      console.log("You're a big loser HAHAHAHAHAHA");
      lossCount += 1;
      console.log(`
      You: ${winCount}
      Computer: ${lossCount}`);
      return lossCount;
    }
  }
  if (playerChoice === "scissors") {
    if (computerChoice === "scissors") {
      console.log(`You picked ${playerChoice}`);
      console.log(`The computer picked ${computerChoice}`);
      console.log("It's a tie");
      tieCount += 1;
      console.log(`
      You: ${winCount}
      Computer: ${lossCount}`);
      return tieCount;
    } else if (computerChoice === "rock") {
      console.log(`You picked ${playerChoice}`);
      console.log(`The computer picked ${computerChoice}`);
      console.log("You're a big loser HAHAHAHAHAHA");
      lossCount += 1;
      console.log(`
      You: ${winCount}
      Computer: ${lossCount}`);
      return lossCount;
    } else if (computerChoice === "paper") {
      console.log(`You picked ${playerChoice}`);
      console.log(`The computer picked ${computerChoice}`);
      console.log("You win!");
      winCount += 1;
      console.log(`
      You: ${winCount}
      Computer: ${lossCount}`);
      return winCount;
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      console.log(`You picked ${playerChoice}`);
      console.log(`The computer picked ${computerChoice}`);
      console.log("It's a tie");
      tieCount += 1;
      console.log(`
      You: ${winCount}
      Computer: ${lossCount}`);
      return tieCount;
    } else if (computerChoice === "rock") {
      console.log(`You picked ${playerChoice}`);
      console.log(`The computer picked ${computerChoice}`);
      console.log("You win!");
      winCount += 1;
      console.log(`
      You: ${winCount}
      Computer: ${lossCount}`);
      return winCount;
    } else if (computerChoice === "scissors") {
      console.log(`You picked ${playerChoice}`);
      console.log(`The computer picked ${computerChoice}`);
      console.log("You're a big loser HAHAHAHAHAHA");
      lossCount += 1;
      console.log(`
      You: ${winCount}
      Computer: ${lossCount}`);
      return lossCount;
    }
  }
}

playRound(playerChoice, computerChoice);
