import Vue from "vue"

import LottoBall from "./lottoBall/lottoBall.vue"

function getWinNumbers(amountOfBalls: number, amountOfWinBalls: number): number[] {

    const balls = Array.from({length: amountOfBalls}).map((v, i) => i)
    const shuffle: number[] = []
    Array.from({length: amountOfWinBalls}).forEach(() => {
        shuffle.push(balls.splice(Math.floor(Math.random() * balls.length), 1)[0])
    })
    return shuffle.sort((a, b) => a - b)
}

let interrupt: boolean

const component = Vue.extend({
    components: {
        LottoBall
    },
    data() {
        return {
            bonus: undefined as unknown,
            winNumbers: [] as number[],
            winBalls: [] as number[],
            redo: false,
            result: "",
        }
    },
    computed: {
        getLottoNumberClassName() {
            return (n: number) => ({
                backgroundColor: "",
            })
        },
    },
    methods: {
        onOneMoreClick() {
            this.bonus = undefined
            this.winBalls = []
            this.redo = false
            // watch winBalls로 해결한다.
            // this.startLotto()
        },
        delayPush(ns: number[]) {
            if (interrupt) {
                throw new Error("interuppted")
            }
            if (ns.length > 1) {
                return new Promise(resolve => {
                    setTimeout(
                        async () => {
                            console.log("length", ns.length)
                            this.winBalls.push(ns[0])
                            await this.delayPush(ns.slice().splice(1))
                            resolve()
                        },
                        500
                    )
                })
            }
            return Promise.resolve()
        },
        async startLotto() {
            const numbers = getWinNumbers(45, 7)
            await this.delayPush(numbers)
            this.bonus = numbers[6]
            this.redo = true
        }
    },
    created() {
        console.log("created")
    },
    beforeDestroy() {
        interrupt = true
    },
    async mounted() {
        this.startLotto()
    },
    watch: {
        winBalls(val, prevVal) {
            console.log("val", val)
            console.log("prev", prevVal)
            if (val.length === 0) {
                this.startLotto()
            }
        }
    }
})

export default component
