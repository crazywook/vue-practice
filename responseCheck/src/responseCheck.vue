<template>
    <div>
        <div 
            id="screen"
            v-bind:class="state"
            @click="onClick"
        >
            {{message}}
        </div>
        <div v-show="responseTimes.length">  
            <div>{{`${responseTimeAverage}ms` || "0ms"}}</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
import s from "./responseCheck.ts"
export default s
</script>
<style lang="css" scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.ready {
        background-color: aqua;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.now {
        background-color: greenyellow;
    }
    #screen.fail {
        background-color: red;
    }
</style>