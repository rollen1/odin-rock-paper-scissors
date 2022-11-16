/* function getComputerChoice() {
    let random = Math.floor(Math.random() * 3 ) + 1;

    if (random === 1) {
        return 'Rock';
    } else if (random === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
} */

let capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase();

function getComputerChoice() {

    let gameArray = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    let computerSelection = gameArray[Math.floor(Math.random() * gameArray.length)];

    return computerSelection;

}

function playRound(playerSelection, computerSelection) {


    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You win! Paper beats Rock`
    } else if (playerSelection === computerSelection) {
        return `Draw!`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }

}

function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = capitalize(prompt(''));
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
     }

}

game()