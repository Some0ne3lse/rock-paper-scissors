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

let playerSelection = prompt('Please enter your choice').toLowerCase();

let computerSelection = getComputerChoice();
console.log(computerSelection);

if (playerSelection === computerSelection) {
  alert('It is a tie!');
} else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
  (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
  (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
  alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
} else {
  alert(`You Win! ${playerSelection} beats ${computerSelection}`);
}