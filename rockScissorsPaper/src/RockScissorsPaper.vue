<template>
    <div>
        <div 
            id="computer"
            v-bind:style="computerHandImageStyle"
        />
        <div>  
            <button @click="onClick(0)">바위</button>
            <button @click="onClick(1)">가위</button>
            <button @click="onClick(2)">paper</button>
        </div>
        <div>{{result}}</div>
        <div>myScore: {{myScore}}</div>
        <div>computerScore: {{computerScore}}</div>
    </div>
</template>

<script>
import s from "./RockScissorsPaper.ts"
export default s

</script>
<style lang="css" scoped>
    #computer {
        width: 142px;
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