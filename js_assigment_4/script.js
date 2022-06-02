const combinations = ['Rock', 'Paper', 'Scissors']


/** b) 
Your game is going to play against the computer, so begin with a function called
computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step! 
**/

const computerPlay = () => {
    let randomSelection = combinations[Math.floor(Math.random() * combinations.length)];
    return randomSelection;
}

console.log("1st Function --> ComputerPlay:", computerPlay());

/** c)
 Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// i. Make your function’s playerSelection parameter case-insensitive (so users can
input rock, ROCK, RocK or any other variation). (Here’s a tip on how to do that)
**/


const singleRound = (playerSelection, computerSelection) => {
    
    playerSelection = prompt("Please choose one of the following('Rock', 'Paper', 'Scissors') and write it down: ").toLowerCase();
    console.log("Your selection:", playerSelection)

    computerSelection = computerPlay().toLowerCase();
    console.log("Computers Selection:", computerSelection)
    
    if (playerSelection === computerSelection) { return "The result is a tie!" } 
    else if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Won! Rock beats Scissors";
        }
    }
    else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Won! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    }
    else if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            return "You Won! Scissors beats Paper";
        } else {
            return "You Lose! Rock beats Scissors";
        }
    }
    else return "Please check your input !!!"
}


/**
 * e)
 * Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 
 **/

const game = () => {
    console.log("3rd Function --> game():")
    for (let i = 0; i < 5; i++) {
        console.log("Game nr:",i+1)
        console.log(singleRound());
    }
}