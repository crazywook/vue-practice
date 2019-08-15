<template>
    <div>
        <h1>{{answer.join("")}}</h1>
        <form @submit.prevent="onSubmit">
            <input ref="answer" maxlength="4" v-model="value" />
            <button @click="onClick">입력</button>
        </form>
        <div>시도{{tries.length}}</div>
        <ul>
            <li v-for="(t, i) in tries" v-bind:key="i">
                {{i}}회: {{t.try}} 결과: {{t.result}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            answer: getRandomNumber(4),
            tries: [],
        }
    },
    methods: {
        onSubmit(e) {

            this.tries.push({
                try: this.value,
                result: getResult(this.answer, this.value)
            })
            this.value = ""
        },
        onClick() {
            
        }
    }
}

function getRandomNumber(n)
{
    const cndt = [1,2,3,4,5,6,7,8,9]
    const arr = []
    for(let i = 0; i < n; i ++) {
        const chosen = cndt.splice(Math.random() * (9 - i), 1)[0]
        arr.push(chosen)
    }
    return arr
}

function getResult(answer, value)
{
    if(answer.length !== value.length) {
        throw new Error(`not equal length: answer length: ${answer.length}, value length: ${value.length}`)
    }

    const {strike, ball} = answer.reduce(
        ({strike, ball}, target, i) => {
            if( checkStrike(target, parseInt(value[i])) ) {
                return {
                    strike: strike + 1,
                    ball
                }
            } else {
                const currBall = value.includes(target) ? 1 : 0
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

function checkStrike(t, s) {
    return t === s
}

</script>