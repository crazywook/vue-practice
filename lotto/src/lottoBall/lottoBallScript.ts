import Vue from "vue"

function getWinBallType(n: number) {
    switch (Math.floor(n / 10)) {
        case 0:
            return "about-one"
        case 1:
            return "about-ten"
        case 2:
            return "about-twenty"
        case 3:
            return "about-thirty"
        case 4:
            return "about-forty"
    }
}

export const LottoBall = Vue.extend({
    name: "LottoBall",
    props: {
        number: Number
    },
    data() {
        return {
            winNumbers: [] as number[],
            background: "green"
        }
    },
    computed: {
        winBallClassName() {

            return `win-ball--${getWinBallType(this.number)}`
        }
    }
})
