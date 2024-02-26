// CREATE list
// CALL rock paper or scissors
// INPUT user choice
// COMPARE both results
// DISPLAY winner

const options = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
  let idx = Math.round(Math.random() * (3 - 1));
  return options[idx];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let playerSelection = 'paper';

// let playerSelection = prompt('Please enter your choice').toLowerCase();

let computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
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

console.log(playRound(playerSelection, computerSelection));

// if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
//   alert('Not an option');
// } else if (playerSelection === computerSelection) {
//   alert('It is a tie!');
// } else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
//   (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
//   (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
//   alert(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`);
// } else {
//   alert(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`);
// }