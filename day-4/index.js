const fs = require('fs');

let input = fs.readFileSync('./input.txt').toString().split('\n')

function partOne(){
    let sum = 0

    for(let i of input){
        i = i.split(',')

        let pairOne = i[0].split('-')
        let pairTwo = i[1].split('-')

        let biggest1 = Number(pairOne[1])
        let smallest1 = Number(pairOne[0])

        let biggest2 = Number(pairTwo[1])
        let smallest2 = Number(pairTwo[0])


        if(biggest1 >= biggest2 && smallest1 <= smallest2){
            sum++
            continue;
        }

        if(biggest2 >= biggest1 && smallest2 <= smallest1){
            sum++
            continue;
        }

    }

    return sum
}

function isOverlapped(smallest1, biggest1, smallest2, biggest2){
    if(smallest1 >= smallest2 && biggest1 <= biggest2){
        return true
    }else if(smallest1 >= smallest2 && smallest1 <= biggest2){
        return true
    }else if(smallest2 >= smallest1 && biggest2 <= biggest1){
        return true
    }else if(smallest2 >= smallest1 && smallest2 <= biggest1){
        return true
    }

    return false
}

function partTwo(){
    let sum = 0
    
    for(let i of input){
        i = i.split(',')

        let pairOne = i[0].split('-')
        let pairTwo = i[1].split('-')

        let biggest1 = Number(pairOne[1])
        let smallest1 = Number(pairOne[0])

        let biggest2 = Number(pairTwo[1])
        let smallest2 = Number(pairTwo[0])

        if(isOverlapped(smallest1, biggest1, smallest2, biggest2)){
            sum++
        }

    }

    return sum
}

console.log(partOne())
console.log(partTwo())