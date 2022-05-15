let playerScore = 0
let computerScore = 0

function pick(number) {
    playerSelection = number;
}

fuction playerPick() {
    if (playerSelection === 1) {
        return "rock";
        }  if (playerSelection === 2) {
            return "paper";
        }  if (playerSelection === 3) {
            return "scissors";
        }
}

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
function rock() {
    alert("YAY! YOU DID IT!");
  }


function PlayAround (computerPlay) {
        if (button.value === "rock") {
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
        else if  (button.value === "paper") {
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
        else if  (button.value === "scissors") { 
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
alert(PlayAround(computerPlay));
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        PlayRound(button.value)
    })
})
