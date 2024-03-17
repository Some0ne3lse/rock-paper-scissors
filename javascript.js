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



function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    if (playerSelection === computerSelection) {
      return 'It is a tie!';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
      return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    } else {
      return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    }
  } else {
    return 'Not an option';
  }
}

let all = document.querySelector('#all');

all.addEventListener('click', (event) => {
  let target = event.target;

  switch (target.id) {
    case 'rock':
      results.textContent = playRound('rock');
      break;
    case 'paper':
      results.textContent = playRound('paper');
      break;
    case 'scissors':
      results.textContent = playRound('scissors');

      break;
  }
})

const resultsContainer = document.querySelector('#results');

const results = document.createElement('div');
results.classList.add('resultsClass');


resultsContainer.appendChild(results);



// function playGame() {
//   for (let i = 1; i <= 5; ++i) {
//     computerSelection = getComputerChoice();

//     playerSelection = prompt('Please enter your choice').toLowerCase();

//     console.log(playRound());
//   }
//   return 'Game Over';
// }
