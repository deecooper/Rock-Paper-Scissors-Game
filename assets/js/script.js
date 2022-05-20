//Global Variables
let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoiceDisplay = document.getElementById("player-choice");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");
let rockRef = document.querySelector("#rock");
let scissorsRef = document.querySelector("#scissors");
let paperRef = document.querySelector("#paper");
let computerImage = document.getElementById('computer-image');
let resultDisplay = document.getElementById("result")
let buttonChoices = document.querySelectorAll("button");
let computerOptions;
let playerChoice;
let computerChoice;
let computerScore = 0;
let playerScore = 0;
let result;
let gameResult;
let gameCompleted = false;


const controlOptions = {
    rock: "./assets/images/rock.png",
    paper: "./assets/images/paper.png",
    scissors: "./assets/images/scissors.png",

};

rockRef.addEventListener('click', () => {
    displayUserChoice("rock");
});

scissorsRef.addEventListener('click', () => {
    displayUserChoice("scissors");
});

paperRef.addEventListener('click', () => {
    displayUserChoice("paper");
});


//Displays the image as the button is pressed

function displayUserChoice(control) {
    document.getElementById("player-image").src = controlOptions[control];

    let userContest = document.getElementById("player-image");
    userContest.style.visibility = "visible";
}

// Player choice buttons
buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;

    computerSelection();
    getResult();
    getScore();

}));

//Computer Choice

function computerSelection() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";

    } else if (randomNumber === 2) {
        computerChoice = "scissors";

    }
    computerOptions = ["rock", "paper", "scissors"];

    computerChoiceDisplay.innerHTML = computerChoice;
    let computerChoose = computerOptions[randomNumber];
    console.log(computerChoose)
    computerImage.src = `./assets/images/${computerChoiceDisplay.innerHTML}.png`;
    computerImage.style.visibility = "visible";


}

//Updates the result
function getResult() {
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            result = "Its a draw";
        } else if (computerChoice === "scissors") {
            result = "You Won";
            playerScore++;
        } else if (computerChoice === "paper") {
            result = "You lose";
            computerScore++;

        }

    }

    if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            result = "Its a draw";
        } else if (computerChoice === "rock") {
            result = "You Won";
            playerScore++;
        } else if (computerChoice === "scissors") {
            result = "You lose";
            computerScore++;

        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "scissors") {
            result = "Its a draw";
        } else if (computerChoice === "paper") {
            result = "You Won";
            playerScore++;
        } else if (computerChoice === "rock") {
            result = "You lose";
            computerScore++;

        }

    }

    resultDisplay.innerHTML = result;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;

}


function getScore() {

    if (playerScore === 10 && computerScore < 10) {
        gameCompleted = true;
        alert("You won");
        window.location.replace("game-finished.html");



    } else if (playerScore < 10 && computerScore === 10) {
        gameCompleted = true;
        alert("You lost");
        window.location.replace("game-finished.html");


    }


}
