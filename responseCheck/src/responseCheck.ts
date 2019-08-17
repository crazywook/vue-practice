import Vue from "vue"

interface DataType {
    state: ActionState
    message: ActionStateMessage
    nowTimeoutId?: NodeJS.Timeout
    responseTimes: number[]
}

interface MethodsType {
    onReset(): void
    onClick(): void
}

enum ActionState {
    ready = "ready",
    waiting = "waiting",
    now = "now",
    fail = "fail"
}

enum ActionStateMessage {
    ready = "클릭해서 시작 하세요",
    waiting = "초록색이 되면 클릭하세요",
    now = "",
    fail = "성급하시군요. 초록색이 되면 클릭하세요"
}

const recordTimes = {

    startTime: 0,
    endTime: 0
}
let nowTimeoutId: NodeJS.Timeout

const component = Vue.extend<DataType, MethodsType, unknown, never>({
    data() {
        return {
            state: ActionState.ready,
            message: ActionStateMessage.ready,
            responseTimes: [],
        }
    },
    computed: {
        responseTimeAverage() {
            let sum = 0
            for (const n of this.responseTimes) {
                sum += n
            }

            const avg = this.responseTimes.length === 0
                ? 0
                : parseInt( (sum / this.responseTimes.length).toFixed(2) )
            return avg
        },
    },
    methods: {
        onReset() {
            this.responseTimes = []
        },
        onClick() {
            console.log("lick")

            switch (this.state) {
                case ActionState.ready:
                    this.message = ActionStateMessage.waiting
                    this.state = ActionState.waiting
                    nowTimeoutId = setTimeout(() => {
                        this.state = ActionState.now
                        this.message = ActionStateMessage.now
                        recordTimes.startTime = Date.now()
                    }, Math.random() * 1500 + 1000)
                    break
                case ActionState.waiting:
                    nowTimeoutId && clearTimeout(nowTimeoutId)
                    this.state = ActionState.fail
                    this.message = ActionStateMessage.fail
                    setTimeout(() => {
                        this.state = ActionState.ready
                        this.message = ActionStateMessage.ready
                    }, 2000)
                    break
                case ActionState.now:
                    this.state = ActionState.ready
                    this.message = ActionStateMessage.ready
                    recordTimes.endTime = Date.now()
                    this.responseTimes.push(recordTimes.endTime - recordTimes.startTime)
                    break
                case ActionState.fail:
                    break
            }
        }
    }
})

function calculateResponseTimeAverage(ns: number[]): number {
    let sum = 0
    for (const n of ns) {
        sum += n
    }
    return parseInt( (sum / ns.length).toFixed(2) )
}

export default component
