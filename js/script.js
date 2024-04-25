confirm("You will play your game in console window")
confirm("Press F12 to open console window")

console.log("Rock Paper & Scissors ")

function getComputerChoice(){
    const move = Math.floor(Math.random()*3+1)
    return move
}

function getHumanChoice(){
    x=prompt("Enter Your Choice    1. Rock🪨   2.Paper📄   3.Scissor✂️")
    return x
}

function move(x){
    if (x===1){
        return('rock')
    }
    else if(x===2){
        return('paper')
    }
    else{
        return('scissor')
    }
}

console.log(move(getComputerChoice()))
console.log(move(getHumanChoice()))