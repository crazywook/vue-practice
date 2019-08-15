function checkPalin(str) {
    const size = str.length
    const centerDigit = Math.ceil(size / 2)
    const front = str.substr(0,centerDigit)
    const back = str.substr(-centerDigit).split("").reverse().join("")
    return front === back
}

function solution(s) {

    const length = s.length
    for(let i = length; i >= 1; i --) {
        for(let j = 0; j <= length - i; j ++) {
            const partial = s.substr(j, j + i)
            const isPalin = checkPalin(partial)
            if(isPalin) {
                return partial.length
            }
        }
        
    }
    return 0
}

console.log(solution("abcdcba"))
console.log(solution("abacde"))