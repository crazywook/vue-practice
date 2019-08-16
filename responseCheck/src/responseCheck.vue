<template>
    <div>
        <div id="screen" v-bind:class="state">{{}}</div>
        <div>  
            <div>평균시간</div>
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
    }
    #screen.wating {
        background-color: aqua;
    }
    #screen.ready {
        background-color: yellow;
    }
    #screen.wating {
        background-color: aqua;
    }
</style>