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
function playRound(playerSelection, computerSeletion) {
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


const buttons = document.querySelectorAll('button');
//assigns playerSelection for each button click
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        return playerSelection;
    });
    });
//plays a game for each click using updated selection
buttons.forEach((button) => {
    button.addEventListener('click', game)
});
//set scores to 0 to start game

//count score, stopping game once score of 5 is reached


//play the individual game. Initial function to call in console
function game() {
                    
        //recalculate computer choice each iteration
        let computerSelection = getComputerChoice();
        // assign return message each iteration
        let roundResult = playRound(playerSelection, computerSelection)
        //assign single letter as result code
        let winOrLoss = roundResult.slice(4, 5)          
          if (winOrLoss == 'W') {
            playerScore += 1;
            } else
          if (winOrLoss == 'L') {
            computerScore += 1;
          } else {
            console.log(roundResult);
            //this ensures the game is a best of 5 stopping when 5 'win or lose' games are completed
          }
          div.textContent = `${roundResult} The score is ${playerScore} to ${computerScore}`;
          }
    const div = document.createElement('div');
    const container = document.querySelector('#container');
    div.classList.add('score');

    container.appendChild(div);
            