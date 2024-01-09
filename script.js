function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
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

function game() {
  while (winCount < 3 && lossCount < 3) {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    playRound(playerChoice, computerChoice);
  }
  if (winCount === 3) {
    console.log("You won the best of 5 :)");
  } else if (lossCount === 3) {
    console.log("The computer won the best of 5 :(");
  }
}

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

game();
