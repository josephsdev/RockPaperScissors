function computerPlay () {
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

function playa () {
    var i = prompt("Rock, Paper, or Scissors?:");
    return i.toLowerCase();
}
console.log(computerPlay(), playa())

function PlayAround (computerPlay, playerPicks) {
    var computerPicks = computerPlay ()  
    var playerPicks = playa()
    if (playerPicks === computerPicks) {
        console.log("It's a tie!")
        }
        else if  (playerPicks == ("rock")) {
        if (computerPicks == ("paper")) {
        console.log ("You lose!")
        }
        else if (computerPicks == ("scissors")) {
            alert("You win!")
        } }
        else if  (playerPicks == ("paper")) {
        if (computerPicks == ("scissors")) {
            alert("You lose!")
        }
        else if (computerPicks == ("rock")) {
            alert("You win!")
        } }
        else if  (playerPicks == ("scissors")) { 
        if (computerPicks == ("paper")) {
            alert("You Win!")
    }
        else if (computerPicks == ("rock")) {
            alert("You lose!")
        }      
} }

    

