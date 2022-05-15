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
                return("Computer chose paper, you lose!");
            }
            else if (computerPicks === "scissors") {
                return("Computer chose scissors, you win!");
            }
            else {
                return("Computer chose rock, it's a tie!");
            }
        }
        else if  (playerPicks === "paper") {
            if (computerPicks === "scissors") {
                return("Computer chose scissors, you lose!");
            }
            else if (computerPicks === "rock") {
                return("Computer chose rock, you win!");
            }
            else {
                return("Computer chose paper, it's a tie!");
            }
        }
        else if  (playerPicks === "scissors") { 
            if (computerPicks === "paper") {
                return("Computer chose paper, you Win!");
        }
            else if (computerPicks === "rock") {
                return("Computer chose rock, you lose!");
        }
            else {
                return("Computer chose scissors, it's a tie!");
            }
        }
    
} 
const computerPicks = computerPlay();  
const playerPicks = playa();
alert(PlayAround(computerPlay, playa));
console.log(PlayAround(computerPlay, playa));

