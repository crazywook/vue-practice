<template>
    <div v-bind:class="['win-ball', winBallClassName]" >{{number}}</div>
</template>
<script lang="ts">
import {LottoBall} from "./lottoBallScript"
export default LottoBall
</script>
<style scoped>
    .win-ball {
        width: 3rem;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        border-radius: 100%;
    }

    .win-ball--about-one {
        background-color: red;
    }
    .win-ball--about-ten {
        background-color: orange;
    }
    .win-ball--about-twenty {
        background-color: yellow;
    }
    .win-ball--about-thirty {
        background-color: blue;
    }
    .win-ball--about-forty {
        background-color: olivedrab;
    }
</style>