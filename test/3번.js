function checkPalin(str) {
    const size = str.length
    const centerDigit = Math.ceil(size / 2)
    const front = str.substr(0,centerDigit)
    const back = reverseStr(str.substr(-centerDigit))
    return front === back
}

function reverseStr(str) {
    return str.split("").reverse().join("")
}

function canMakePalin(front, back) {
    console.log(front)
    console.log(front.substr(-back.length))
    console.log(back)
    console.log(reverseStr(back))
    return front.substr(-back.length) === reverseStr(back)
}

function solution(plain) {

    const length = plain.length

    if(checkPalin(plain)) {
        return length
    }
    
    const pivotDigit = Math.ceil(length / 2) - 1
    for(let i = pivotDigit; i < length; i++) {

        console.log(i)
        const frontEndIndex = (i % 2) === 0 ? i + 1 : i + 1
        const backStartIndex = (i % 2) === 0 ? i + 1 : i + 1

        const front = plain.substr(0, frontEndIndex)
        const back = plain.substr(backStartIndex)

        if(canMakePalin(front, back)) {
            console.log(i)
            return (length % 2) === 0 ? (i + 1) * 2 : i * 2 + 1
        }
    }

    const result = length % 2 === 0 ? length * 2 : (length - 1) * 2
    return result;
}

const a1 = "abcc"
const a2 = "abcdc"

console.log(solution(a2))