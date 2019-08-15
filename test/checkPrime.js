// [1,2,10]
// [2,3,8]
// [2,4,7]
// [3,4,6]
// [3,4,9]

// [1,2,14]
// [1,3,13]
// [1,4,12]

// [4,5,8]

// [4,6,9]

function solution(arr) {
    const l = arr.length
    let count = 0
    
    for(let i = 0; i < l -2 ; i ++) {
        console.log(i)
        for(let j = i + 1; j < l - 1; j ++) {

            for(let k = j + 1; k < l; k ++) {
                console.log(arr[i], arr[j], arr[k])
                const candi = arr[i] + arr[j] + arr[k]
                console.log(candi)
                if(checkPrime(candi)) {
                    count ++ 
                }
            }
        }
    }
    return count
}

function checkPrime(num) {

    if (num === 2) {
        return true
    }

    for (let i = 2; i <= Math.sqrt(num); i++) { 
        console.log("num", num,)
        if (num % i === 0) {

            return false
        }

    }
    return true
}

const a1 = [1,2,3,4]
const a2 = [1,2,7,6,4]

const r1 = solution(a1)
console.log(r1)
console.log(solution(a2))