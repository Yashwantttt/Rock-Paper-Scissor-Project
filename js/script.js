let humanScore = 0 ;
let computerScore = 0 ;

function getComputerChoice(){
    const move = Math.floor(Math.random()*3+1)
    return move
}

function move(x){
    y=getComputerChoice();
    imageDisplayer(y);
    scoreCounter(humanScore,computerScore);
    setTimeout(playRound,500,x,y);
    
}

function playRound(humanChoice,computerChoice){
    
    if ((humanChoice===1 && computerChoice===2) || (humanChoice===3 && computerChoice===1) || (humanChoice===2 && computerChoice===3) ){
        
        alert("Computer wins this round");
        computerScore ++;
    }
    else if((humanChoice===1 && computerChoice===3) || (humanChoice===2 & computerChoice===1) || (humanChoice===3 && computerChoice===2)){
        alert("You won this round");
        humanScore++;
    }
    else{
        alert("Its a Draw !!")
    }
}

function imageDisplayer(number){
    let frame = document.getElementById('frame')
    if (number===1){
        frame.innerHTML='<img src="rock.png" alt="rock" class="choiceImg"> ';
    }
    else if (number===2){
        frame.innerHTML='<img src="paper.png" alt="paper" class="choiceImg">';
    }
    else if (number===3){
        frame.innerHTML='<img src="scissors.webp" alt="scissor" class="choiceImg">';
    }
}


function scoreCounter(x,y){
    document.getElementById("humanScore").textContent=x;
    document.getElementById("computerScore").textContent=y;

}











// function getHumanChoice(){
//     x=prompt("Enter Your Choice    1. Rock🪨   2.Paper📄   3.Scissor✂️")
//     return Number(x)
// }

// // Converts Number to their respective element

// }

// // SCORE VARIABLES     
// let humanScore = 0;
// let computerScore=0;



// //  Game Logic



// let playchoice= prompt("Are You Ready to Play? 1. Yes  2. No")
// const playy = Number(playchoice)
// if (playy===1){
//     let i = 1
//     while (i <=5) {
//         console.log("----Round ",i)
//         alert("Round "+i)
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         console.log("You : ",move(humanSelection))
//         console.log("Computer :",move(computerSelection))
//         console.log(playRound(humanSelection, computerSelection))
        
//         i = i +1
//     }

//     if (humanScore>computerScore){
//         alert("You won ...You :",humanScore," win & computer :",computerScore," win")
//     }else if (humanScore<computerScore){
//         alert("Computer won ...You :",humanScore," wins & computer :",computerScore," wins")
//     }else{
//         alert("Its a draw")
// }

// }else{
    
// }

