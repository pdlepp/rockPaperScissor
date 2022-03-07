function computerPlay(){
    let test;
    test = Math.floor(Math.random() * 3);//returns a number 0-2
    return test;
}

function playerSelection(selection){    
    game(selection); //return user selection
}

function increaseTotal(increaseNumber){
    let temp = document.getElementById(increaseNumber).innerHTML;
    document.getElementById(increaseNumber).innerHTML = ++temp;
}

function playRound(playerSelection, computerSelection) {
    let choices = ["Rock", "Paper", "Scissor"];
    if(playerSelection === computerSelection) {
        document.getElementById("currentResults").innerHTML = "Tie!";
        increaseTotal("totalGames");
        return 0;
    }
    else if(playerSelection === 1 && computerSelection === 0 || playerSelection === 2 && computerSelection === 1 || 
        playerSelection === 0 && computerSelection === 2){
        document.getElementById("currentResults").innerHTML =
        "You win! " + choices[playerSelection] + " beats " + 
        choices[computerSelection];
        increaseTotal("totalGames");
        increaseTotal("playerResults");
        return 2;
    }
    else if(playerSelection === 0 && computerSelection === 1 || playerSelection === 1 && computerSelection === 2 || 
        playerSelection === 2 && computerSelection === 0){
        document.getElementById("currentResults").innerHTML = 
        "You lose! " + choices[computerSelection] + " beats " + 
        choices[playerSelection];
        increaseTotal("totalGames");
        increaseTotal("computerResults");
        return 1;
    } else{
        console.log("error!");
        return -1;
    }
}

function game(playerInput){
    let computerInput = computerPlay();
    playRound(playerInput, computerInput);   
}

let rockButton = document.querySelector("rockBtn");
rockBtn.addEventListener('click', () => {
    playerSelection(0);
});

let paperButton = document.querySelector("rockBtn");
paperBtn.addEventListener('click', () => {
    playerSelection(1);
});

let scissorButton = document.querySelector("rockBtn");
scissorBtn.addEventListener('click', () => {
    playerSelection(2);
});

