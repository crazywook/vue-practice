<template>
    <div>
        <temp/>
        <!-- <h1>{{result}}</h1>
        <div class="win-balls"> 
            <lotto-ball
                v-for="ball in winBalls" v-bind:key="ball"
                v-bind:number="ball"
            />
        </div>
        <div v-if="bonus">
            <span>보너스</span>
            <lotto-ball :number="bonus" />
            <button
                v-if="redo"
                @click="onOneMoreClick"
            >
                한번 더!
            </button>
        </div> -->
    </div>
</template>

<script lang="ts">
import s from "./lottoScript"
export default s
</script>

<style lang="css" scoped>
    .win-balls {
        display: flex;
        user-select: none;
    }
    .win-balls > * {
        font-size: 1.5rem;
    }
    .win-balls > * ~ * {
        margin-left: 0.5rem;
    }
</style>