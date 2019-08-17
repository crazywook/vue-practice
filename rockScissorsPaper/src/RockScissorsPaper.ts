import Vue from "vue"

interface DataType {
    computerHand: Hand
    computerHandImagePosition: string
    myHand?: Hand
    result: string
    nowTimeoutId?: NodeJS.Timeout
    records: string[]
    myScore: number
    computerScore: number
    isAvailableGame: boolean
}

interface ComputedType {
    computerHandImageStyle: {[index: string]: string}
}

interface MethodsType {
    onReset(): void
    onClick(hand: Hand): void
    decideWin(hand: Hand): void
    startGame(): void
}

export enum Hand {
    rock,
    scissors,
    paper,
}

const handImageXPosition = {
    rock: "0px",
    scissors: "-142px",
    paper: "-284px"
}

const recordTimes = {

    startTime: 0,
    endTime: 0
}

let computerHandChangeInterval: NodeJS.Timeout

const component = Vue.extend<DataType, MethodsType, unknown, never>({
    data() {
        return {
            result: "",
            records: [],
            computerHandImagePosition: handImageXPosition.scissors,
            computerHand: Hand.rock,
            computerScore: 0,
            myScore: 0,
            isAvailableGame: false,
        }
    },
    computed: {
        computerHandImageStyle() {
            return {
                backgroundImage: "url(https://en.pimg.jp/023/182/267/1/23182267.jpg)",
                backgroundPosition: this.computerHandImagePosition
            }
        },
    },
    methods: {
        onReset() {
            this.records = []
        },
        onClick(hand: Hand) {
            clearInterval(computerHandChangeInterval)
            this.isAvailableGame && this.decideWin(hand)
        },
        decideWin(hand: Hand) {
            this.isAvailableGame = false
            this.result = getGameResult(hand, this.computerHand)
            switch (this.result) {
                case "win":
                    this.myScore ++
                    break
                case "lose":
                    this.computerScore ++
                    break
            }
            this.records.push(this.result)
            setTimeout(() => this.startGame(), 1500)
        },
        startGame() {
            this.isAvailableGame = true
            let hand =  Hand[Math.floor(Math.random() * 3)]
            this.computerHand = Hand[hand]
            this.computerHandImagePosition = handImageXPosition[hand]
            computerHandChangeInterval = setInterval(() => {
                hand = Hand[Math.floor(Math.random() * 3)]
                this.computerHand = Hand[hand]
                this.computerHandImagePosition = handImageXPosition[hand]
            }, 1000)
        },
    },
    created() {
        console.log("created")
    },
    mounted() {
        this.startGame()
    },
    beforeDestroy() {
        clearInterval(computerHandChangeInterval)
    },
})

function calculateResponseTimeAverage(ns: number[]): number {
    let sum = 0
    for (const n of ns) {
        sum += n
    }
    return parseInt( (sum / ns.length).toFixed(2) )
}

function getGameResult(me: Hand, target: Hand): "win" | "lose" | "draw" {
    console.log("me", me)
    console.log("target", target)
    switch (me - target) {
        case -1:
        case 2:
            return "win"
        case 1:
        case -2:
            return "lose"
        case 0:
            return "draw"
        default:
            throw new Error("cannot decide winner")
    }
}

export default component
