/* 

// original function i tried to start with, leaving it as reference

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3 ) + 1;

    if (random === 1) {
        return 'Rock';
    } else if (random === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }

} */

// function to capitalize the first letter of any word no matter what

let capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase();

// i chose to randomize an array of 3 strings instead

function getComputerChoice() {

    let gameArray = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    let computerSelection = gameArray[Math.floor(Math.random() * gameArray.length)];

    return computerSelection;

}

// simple if else logic to decide winner

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        return 'You win! Rock beats Scissors'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        return 'You win! Scissors beats Paper'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return `You win! Paper beats Rock`
    } else if (playerSelection === computerSelection) {
        return `Draw!`
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }

}

// for loop to roll 5 rounds and displays the number of round

function game() {

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`)
        const playerSelection = capitalize(prompt(''));
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
     }

     console.log(`Player score: ${playerScore}`);
     console.log(`Computer score: ${computerScore}`);

     if (playerScore > computerScore) {
        console.log('Player wins!');
     } else {
        console.log('Computer wins!');
     }

}

// calling function

game()