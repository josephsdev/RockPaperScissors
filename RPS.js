function computerPlay() {
    let compChoices = ["rock", "paper", "scissors"]
    let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1;

    if (randomizeChoice === 1) {
    return "rock";
    }  if (randomizeChoice === 2) {
        return "paper";
    }  if (randomizeChoice === 3) {
        return "scissors";
    }
}
console.log("computer's choice: " + computerPlay());
function playa() {
    var i = prompt("Rock, Paper, or Scissors?:");
    return i.toLowerCase();
}

function PlayAround(computerPlay, playa) {
        if (playerPicks === "rock") {
            if (computerPicks === "paper") {
                return("You lose!");
            }
            else if (computerPicks === "scissors") {
                return("You win!");
            }
            else {
                return("It's a tie!");
            }
        }
        else if  (playerPicks === "paper") {
            if (computerPicks === "scissors") {
                return("You lose!");
            }
            else if (computerPicks === "rock") {
                return("You win!");
            }
            else {
                return("It's a tie!");
            }
        }
        else if  (playerPicks === "scissors") { 
            if (computerPicks === "paper") {
                return("You Win!");
        }
            else if (computerPicks === "rock") {
                return("You lose!");
        }
            else {
                return("It's a tie!");
            }
        }
    
} 
const computerPicks = computerPlay();  
const playerPicks = playa();
alert(PlayAround(computerPlay, playa));
console.log(PlayAround(computerPlay, playa));

