function computerPlay(){
    const arr = ["Rock", "Paper", "Scissors"];
    let random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}


function game(){

    function playRound(playerSelection, computerSelection){
        if (playerSelection == "rock" && computerSelection == "Scissors"){
            console.log("Rock beats Scissors, You Win!");
        }
        else if (playerSelection == "rock" && computerSelection == "Paper"){
            console.log("Paper beats Rock, You lose");
        }
        else if(playerSelection == "rock" && computerSelection == "Rock"){
            console.log("Rock and Rock, It's a tie");
       }
        else if (playerSelection == "paper" && computerSelection == "Rock"){
            console.log("Paper beats Rock, You win");
       }
       else if (playerSelection == "paper" && computerSelection == "Scissors"){
            console.log("Scissors beats Paper, You lose");
       }
       else if (playerSelection == "paper" && computerSelection == "Paper"){
            console.log("Paper and Paper, It's a tie");
        }
        else if (playerSelection == "scissors" && computerSelection == "Paper"){
            console.log("Scissors beats paper, You win");
        }
        else if (playerSelection == "scissors" && computerSelection == "Rock"){
            console.log("Rock beats scissors, You lose");
        }
        else if (playerSelection == "scissors" && computerSelection == "Scissors"){
            console.log("Scissors and scissors, It's a tie");
        }
    }
    let player = prompt("Rock, Paper, Scissors?");
    const playerSelection = player.toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());