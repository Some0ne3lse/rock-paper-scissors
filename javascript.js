// CREATE list
// CALL rock paper or scissors
// INPUT user choice
// COMPARE both results
// DISPLAY winner

const options = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
  let idx = Math.floor(Math.random() * options.length);
  return options[idx];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


let playerSelection;

let computerSelection;

let playerScore = 0;
let computerScore = 0;

let gameOver = false;


function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    if (playerSelection === computerSelection) {
      return 'It is a tie!';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {

      computerScore += 1;
      endGameAt5(playerScore, computerScore);
      if (gameOver === true) {
        computerScore = 0;
        playerScore = 0;
        gameOver = false;
      }
      return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    } else {

      playerScore += 1;
      endGameAt5(playerScore, computerScore);
      if (gameOver === true) {
        computerScore = 0;
        playerScore = 0;
        gameOver = false;
      }
      return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    }
  } else {
    return 'Not an option';
  }
}


function endGameAt5(playerScore, computerScore) {
  if (playerScore === 5) {
    const winner = document.createElement('div');
    winner.textContent = 'Player Wins!';
    resultsContainer.appendChild(winner);
    gameOver = true;
  } else if (computerScore === 5) {
    const winner = document.createElement('div');
    winner.textContent = 'Computer Wins!';
    resultsContainer.appendChild(winner);
    gameOver = true;
  }
}

let all = document.querySelector('#all');

all.addEventListener('click', (event) => {
  let target = event.target;

  switch (target.id) {
    case 'rock':
      results.textContent = playRound('rock');
      score.textContent = `Current score is: Computer ${computerScore} - Player ${playerScore}`
      break;
    case 'paper':
      results.textContent = playRound('paper');
      score.textContent = `Current score is: Computer ${computerScore} - Player ${playerScore}`
      break;
    case 'scissors':
      results.textContent = playRound('scissors');
      score.textContent = `Current score is: Computer ${computerScore} - Player ${playerScore}`
      break;
  }
})

const resultsContainer = document.querySelector('#results');

const results = document.createElement('div');
results.classList.add('resultsClass');


resultsContainer.appendChild(results);

const score = document.createElement('div');
resultsContainer.appendChild(score);



// function playGame() {
//   for (let i = 1; i <= 5; ++i) {
//     computerSelection = getComputerChoice();

//     playerSelection = prompt('Please enter your choice').toLowerCase();

//     console.log(playRound());
//   }
//   return 'Game Over';
// }
