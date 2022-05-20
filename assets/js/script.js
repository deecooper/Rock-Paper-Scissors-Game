//Global Variables
let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoiceDisplay = document.getElementById("player-choice");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");
let buttonChoices = document.querySelectorAll("button");


let playerChoice;
let computerChoice;


buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;


    computerSelection();
    getResult();
    getScore();

}));
