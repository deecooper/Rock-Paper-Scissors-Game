//Global Variables
let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoiceDisplay = document.getElementById("player-choice");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");
let buttonChoices = document.querySelectorAll("button");


let playerChoice;
let computerChoice;

//vent listener for player

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;


    computerSelection();
    getResult();
    getScore();

}));


//Computer Selection function

function computerSelection() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";

    } else if (randomNumber === 2) {
        computerChoice = "scissors";

    }

    computerOptions = ["rock", "paper", "scissors"]

    computerChoiceDisplay.innerHTML = computerChoice;
    let computerChoose = computerOptions[randomNumber];

}