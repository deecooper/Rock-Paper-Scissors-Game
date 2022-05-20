//Global Variables
let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoiceDisplay = document.getElementById("player-choice");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");
const rockRef = document.querySelector('#rock');
const scissorsRef = document.querySelector('#scissors');
const paperRef = document.querySelector('#paper');
let computerImage = document.getElementById('computer-image');

let resultDisplay = document.getElementById("result")
let buttonChoices = document.querySelectorAll("button");
let scoreDisplay = document.getElementById("score")
let playerChoice;
let computerChoice;
let computerScore = 0;
let playerScore = 0;
let result;
let gameCompleted = false;


const controlOptions = {
    rock: "./assets/images/rock.png",
    paper: "./assets/images/paper.png",
    scissors: "./assets/images/scissors.png",
   
};

rockRef.addEventListener('click', () => {
    displayUserChoice('rock');});

scissorsRef.addEventListener('click', () => {
    displayUserChoice('scissors');});

paperRef.addEventListener('click', () => {
    displayUserChoice('paper');});


    function displayUserChoice(control) { 
        document.getElementById("player-image").src = controlOptions[control];
    
        let userContest = document.getElementById("player-image");
          userContest.style.visibility = "visible" ;
        }


buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    
  


    computerSelection();
    getResult();
    getScore();

}));


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
    console.log(computerChoose)
    computerImage.src = `./assets/images/${computerChoiceDisplay.innerHTML}.png`; 
    computerImage.style.visibility = "visible" ;  


}

