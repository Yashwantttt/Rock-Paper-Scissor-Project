
// confirm("You will play your game in console window")
// confirm("Type 2 in the 'Are You Ready' , Press F12 to open console window and refresh the page")
// console.log("Rock Paper & Scissors ")

// function getComputerChoice(){
//     const move = Math.floor(Math.random()*3+1)
//     return move
// }

// function getHumanChoice(){
//     x=prompt("Enter Your Choice    1. Rock🪨   2.Paper📄   3.Scissor✂️")
//     return Number(x)
// }

// // Converts Number to their respective element
// function move(x){
//     if (x===1){
//         return('rock')
//     }
//     else if(x===2){
//         return('paper')
//     }
//     else if (x===3){
//         return('scissor')
//     }
//     else{
//         console.log("Please enter valid option")
//     }
    
// }
// // console.log(move(getComputerChoice()))
// // console.log(move(getHumanChoice()))

// // SCORE VARIABLES     
// let humanScore = 0;
// let computerScore=0;



// //  Game Logic
// function playRound(humanChoice,computerChoice){
    
//     if ((humanChoice===1 && computerChoice===2) || (humanChoice===3 && computerChoice===1) || (humanChoice===2 && computerChoice===3) ){
        
//         return("Computer wins this round");
//         computerScore ++;
//     }
//     else if((humanChoice===1 && computerChoice===3) || (humanChoice===2 & computerChoice===1) || (humanChoice===3 && computerChoice===2)){
//         return("You won this round");
//         humanScore++;
//     }
//     else{
//         return("Its a Draw !!")
//     }
// }


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

