const fs = require('fs');

let input = fs.readFileSync('./input.txt').toString().split('\n')

function isLowerCase(char) {
    return (char.charCodeAt() >= 65 && char.charCodeAt() <= 90)
}

function partOne() {
    let sum = 0

    for (let i of input) {
        let firstCompartments = i.slice(0, i.length / 2).split('')
        let secondCompartments = i.slice(i.length / 2)

        for (let j of firstCompartments) {
            if (secondCompartments.includes(j)) {
                sum += isLowerCase(j) ? j.charCodeAt() - 96 : j.charCodeAt() - 65 + 27

                break;
            }
        }
    }

    return sum
}

function partTwo() {
    let sum = 0

    for (let i = 0; i < input.length; i += 3) {
        let arr1 = input[i].split('')
        let arr2 = input[i + 1].split('')
        let arr3 = input[i + 2].split('')

        let firstIntersection = arr1.filter(value => arr2.includes(value))
        let secondIntersection = arr3.filter(value => firstIntersection.includes(value))

        sum += isLowerCase(secondIntersection[0]) ? secondIntersection[0].charCodeAt() - 96 : secondIntersection[0].charCodeAt() - 65 + 27

    }

    return sum
}

console.log(partOne())
console.log(partTwo())
