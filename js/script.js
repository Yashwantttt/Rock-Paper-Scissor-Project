confirm("You will play your game in console window")
confirm("Press F12 to open console window")

console.log("Rock Paper & Scissors ")

function getComputerChoice(){
    const move = Math.floor(Math.random()*3+1)
    return move
}

function getHumanChoice(){
    x=prompt("Enter Your Choice    1. Rock🪨   2.Paper📄   3.Scissor✂️")
    return Number(x)
}

// Converts Number to their respective element
function move(x){
    if (x===1){
        return('rock')
    }
    else if(x===2){
        return('paper')
    }
    else if (x===3){
        return('scissor')
    }
    else{
        console.log("Please enter valid option")
    }
    
}
// console.log(move(getComputerChoice()))
// console.log(move(getHumanChoice()))

// SCORE VARIABLES     
let humanScore = 0;
let computerScore=0;



//  Game Logic
function playRound(humanChoice,computerChoice){
    
    if ((humanChoice===1 && computerChoice===2) || (humanChoice===3 && computerChoice===1) || (humanChoice===2 && computerChoice===3) ){
        
        return("Computer wins this round");
    }
    else if((humanChoice===1 && computerChoice===3) || (humanChoice===2 & computerChoice===1) || (humanChoice===3 && computerChoice===2)){
        return("You won this round");
    }
    else{
        return("Its a Draw !!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("You : ",move(humanSelection))
console.log("Computer :",move(computerSelection))
console.log(playRound(humanSelection, computerSelection))

