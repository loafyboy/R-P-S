const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
const computerCountDisplay = document.getElementById('computerCount')
const userCountDisplay = document.getElementById("userCount")
const gameWinnerDisplay = document.getElementById("gameWinner")


let userChoice
let computerChoice
let result
let userCount = 0
let computerCount = 0
let gameWinner = "???"

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerPlay()
    playRound()
    upTo5()
    pickWinner()
    restartGame()
}))

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1){
        computerChoice = "rock";
    }
    if ( randomNumber === 2) {
        computerChoice = "scissors";
    }
    if (randomNumber === 3){
        computerChoice = "paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function playRound(){
    if (computerChoice === userChoice){
        result = "It's a tie"
    }
    if (computerChoice === "rock" && userChoice === "paper"){
        result = "You win"
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "You lose"
    }
    if (computerChoice === "paper" && userChoice === "rock"){
        result = "You lose"
    }
    if (computerChoice === "paper" && userChoice === "scissors"){
        result = "You win"
    }
    if (computerChoice === "scissors" && userChoice === "rock"){
        result = "You win"
    }
    if (computerChoice === "scissors" && userChoice === "paper"){
        result = "You lose"
    }

    resultDisplay.innerHTML = result;
}

function upTo5(){
    if(result === "You win"){
        userCount += 1
    }
    if(result === "You lose"){
        computerCount += 1
    }
    userCountDisplay.innerHTML = userCount
    computerCountDisplay.innerHTML = computerCount
}

function pickWinner(){
    if(userCount == 5){
        gameWinner = "You"
    }
    if(computerCount == 5) {
        gameWinner = "Computer"
    }
    gameWinnerDisplay.innerHTML = gameWinner
}

function restartGame(){
    if (userCount == 5){
        userCount = 0
        computerCount = 0
        gameWinner = "???"
    }

    if (computerCount == 5){
        computerCount = 0
        userCount = 0
        gameWinner = "???"
    }
    

}