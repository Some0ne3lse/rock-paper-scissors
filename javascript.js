// CREATE list
// CALL rock paper or scissors
// INPUT user choice
// COMPARE both results
// DISPLAY winner

const options = ['ROCK', 'PAPER', 'SCISSORS'];


function getComputerChoice(min, max) {
  let idx = Math.round(Math.random() * (max - min) + min);
  return options[idx];
}

let playerSelection = prompt('Please enter your choice').toUpperCase();

console.log(playerSelection);