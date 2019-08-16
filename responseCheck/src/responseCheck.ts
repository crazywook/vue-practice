import Vue from "vue"

interface DataType {
    result: string[]
    state: string
    message: string
}

interface MethodsType {
    onReset(): void
}

const component = Vue.extend<DataType, MethodsType, unknown, never>({
    data() {
        return {
            result: [],
            state: "wating",
            message: "클릭해서 시작 하세요"            
        }
    },
    methods: {
        onReset() {

        }
    }
})

function getRandomNumber(n: number)
{
    const cndt = [1,2,3,4,5,6,7,8,9]
    const arr: number[] = []
    for(let i = 0; i < n; i ++) {
        const chosen = cndt.splice(Math.random() * (9 - i), 1)[0]
        arr.push(chosen)
    }
    return arr
}

function getResult(answer: number[], value: number[])
{
    if(answer.length !== value.length) {
        throw new Error(`not equal length: answer length: ${answer.length}, value length: ${value.length}`)
    }

    const {strike, ball} = answer.reduce(
        ({strike, ball}, target, i) => {
            if( checkStrike(target, value[i]) ) {
                return {
                    strike: strike + 1,
                    ball
                }
            } else {
                const currBall = value.includes(target) ? 1 : 0
                console.log("Value", value, "Target", target, "currBall", currBall)
                return {
                    strike,
                    ball: ball + currBall
                }
            }
        },
        {
            strike: 0,
            ball: 0,
        }
    )

    if(strike === answer.length) {
        return "홈런"
    }
    if(strike === 0 && ball === 0) {
        return "아웃"
    }
    
    return `${strike}S${ball}B`
}

function checkStrike(t: number, s: number) {
    console.log("t", t, "S", s, "Result", t === s)
    return t === s
}

export default component
