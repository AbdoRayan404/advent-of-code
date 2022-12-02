const fs = require('fs');

let input = fs.readFileSync('./input.txt').toString().split('\n')

let amount = []
let cache = 0

for(let i of input){
    if(i.length > 0){
        cache += Number(i)
    }else{
        amount.push(cache)
        cache = 0
    }
}

amount.sort(function(a, b){return b-a})

console.log('part 1:', amount[0])
console.log('part 2:', amount[0] + amount[1] + amount[2])