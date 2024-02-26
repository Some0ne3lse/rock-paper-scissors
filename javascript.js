// CREATE list
// CALL rock paper or scissors
// INPUT user choice
// COMPARE both results
// DISPLAY winner

const options = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice(min, max) {
  let idx = Math.round(Math.random() * (max - min) + min);
  return options[idx];
}