const fs = require('fs');

let input = fs.readFileSync('./input.txt').toString().split('\n')



let codeForShape = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
    X: 'rock',
    Y: 'paper',
    Z: 'scissors'
}

let weakness = {
    rock: {
        lose: 'paper',
        win: 'scissors'
    },
    paper: {
        lose: 'scissors',
        win: 'rock'
    },
    scissors: {
        lose: 'rock',
        win: 'paper'
    }
}

let scoreForShape = {
    rock: 1,
    paper: 2,
    scissors: 3
}

function canWin(first, second){
    if(codeForShape[first] == codeForShape[second]){
        return 0
    }
    
    if(weakness[codeForShape[first]].win == codeForShape[second]){
        return 1
    }else{
        return -1
    }
}


function firstPart(){
    let score = 0

    for(let i of input){
        let splitted  = i.split(' ')
        score += scoreForShape[codeForShape[splitted[1]]]

        let canIWin = canWin(splitted[1], splitted[0])

        if(canIWin == 1){
            score += 6
        }else if(canIWin == 0){
            score += 3
        }
    }

    return score
}

function secondPart(){
    let score = 0
    for(let i of input){
        let splitted  = i.split(' ')
    
        if(splitted[1] == 'Y'){
            score += scoreForShape[codeForShape[splitted[0]]]
            score += 3
        }else if(splitted[1] == 'Z'){
            score += scoreForShape[weakness[codeForShape[splitted[0]]].lose]
            score += 6
        }else{
            score += scoreForShape[weakness[codeForShape[splitted[0]]].win]
        }
    }

    return score
}

console.log('first part:', firstPart())
console.log('second part:', secondPart())