// 235 ~ 999
function solution(n, m) {
    
    const nStr = n.toString()
    const mStr = m.toString()
    const startDigitSize = nStr.length
    const endDigitSize = mStr.length
    let palinCount = 0

    for(let i = startDigitSize; i <= endDigitSize; i ++) {
        const powNumber = Math.ceil(i / 2)
        const digitPalinCount = 9 * ( 10 ** (powNumber - 1))
        palinCount += digitPalinCount
    }

    let beforePalinCount = 0
    for(let i = 10 ** (startDigitSize - 1); i < n; i ++) {
        if(checkPalin(i, startDigitSize)) {
            beforePalinCount ++
        }
    }

    let afterPalinCount = 0
    for(let i = 10 ** endDigitSize -1; i > m; i --) {
        if(checkPalin(i, endDigitSize)) {
            afterPalinCount ++
        }
    }

    return palinCount - beforePalinCount - afterPalinCount;
}

function checkPalin(n, digitSize) {

    const centerDigit = Math.ceil(digitSize / 2)
    const nStr = n.toString()
    const front = nStr.substr(0,centerDigit)
    const back = nStr.substr(-centerDigit).split("").reverse().join("")
    return front === back
}

console.log(solution(100, 300))