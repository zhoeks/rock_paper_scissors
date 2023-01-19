 //Establish global variables to be updated by round
 var playerSelection = '';
 var playerScore = 0;
 var computerScore = 0;
 //Assign value to computer choice based on random number
 function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= .33) {
        return 'Rock';
    } else
    if (randomNumber <= .67) {
        return 'Paper';
    } else {
        return 'Scissors'
    }  
}
//Return text based on results of single game
const playRound = (playerSelection, computerSelection) => {
    //get new computer choice each round
    computerSelection = getComputerChoice();
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection
    } else
    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection
    } else
    if (playerSelection == 'rock' && computerSelection == 'Rock') {
        return 'You tie! ' + playerSelection + ' is the same as ' + computerSelection
    } else
    if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection
    } else
    if (playerSelection == 'paper' && computerSelection == 'Rock') {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection
    } else
    if (playerSelection == 'paper' && computerSelection == 'Paper') {
        return 'You tie! ' + playerSelection + ' is the same as ' + computerSelection
    } else
    if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection
    } else
    if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection
    } else
    if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        return 'You tie! ' + playerSelection + ' is the same as ' + computerSelection
    }
}

//play the individual game. Initial function to call in console
const testScore = () => {
    playerScore === 5 || computerScore === 5 ?
    gameOver() :
    false;    
}

const gameOver = () => {
    playerScore === 5 ? 
    alert(`Congrats bro, you're a champion`) 
    : alert(`You lost bro, just give it up`);
    playerScore = 0;
    computerScore = 0;
}

const game = () => {
    //recalculate computer choice each iteration
    let computerSelection = getComputerChoice();
    // assign return message each iteration
    let roundResult = playRound(playerSelection, computerSelection)
    //assign single letter as result code
    let winOrLoss = roundResult.slice(4, 5)          
    if (winOrLoss == 'W') {
        playerScore += 1;
        div.classList.add('win');
        div.classList.remove('loss');
    } else
    if (winOrLoss == 'L') {
        computerScore += 1;
        div.classList.add('loss');
        div.classList.remove('win');
    } else {
        div.classList.remove('win');
        div.classList.remove('loss');
    }
    div.textContent = `${roundResult} The score is ${playerScore} to ${computerScore}`;
}
const buttons = document.querySelectorAll('button');
//assigns playerSelection for each button click
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    playerSelection = button.id;
        game();
        testScore();
    });
});
    
const div = document.createElement('div');
const container = document.querySelector('#container');
div.classList.add('score');

container.appendChild(div);
            