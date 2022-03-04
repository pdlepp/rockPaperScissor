function computerPlay(){
    let test;
    test = Math.floor(Math.random() * 3);//returns a number 0-2
    return test;
}

function playerSelection(){
    let test = prompt('Rock, Paper, Scissor');//ask the user to make a choice
    let selection;
    if(test.toLowerCase() == "rock"){ 
        selection = 0;
    }
    else if (test.toLowerCase() == "paper"){
        selection = 1;
    }
    else if (test.toLowerCase() == "scissor"){
        selection = 2;
    }
    return selection; //return user selection
}

function playRound(playerSelection, computerSelection) {
    let choices = ["Rock", "Paper", "Scissor"];
    if(playerSelection === computerSelection) {
        console.log("Tie!");
        return 0;
    }
    else if(playerSelection === 1 && computerSelection === 0 || playerSelection === 2 && computerSelection === 1 || 
        playerSelection === 0 && computerSelection === 2){
        console.log("You win! " + choices[playerSelection] + " beats " + choices[computerSelection]);
        return 2;
    }
    else if(playerSelection === 0 && computerSelection === 1 || playerSelection === 1 && computerSelection === 2 || 
        playerSelection === 2 && computerSelection === 0){
        console.log("You lose! " + choices[computerSelection] + " beats " + choices[playerSelection]);
        return 1;
    } else{
        console.log("error!");
        return -1;
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let computerInput = computerPlay();
        let playerInput = playerSelection();
        playRound(playerInput, computerInput);
    }
}

game();