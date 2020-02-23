<template>
    <div>
        <p :style="styleObject">{{ displayText }}</p>
    </div>
</template>

<script>
export default {
    props: {
        displayText: [String],
        conteinerHeight: {
            type: Number,
            required: true
        }
    },
    computed: {
        styleObject() {
            return {
                height: this.conteinerHeight + 'px'
            }
        }
    }
}
</script>

<style scoped>
    p {
       font-family: "Trade Winds";
       font-size: 42px;
       line-height: 42px;
       text-shadow: 2px 2px 2px #aaa;
       color: #4d4d4d;
       margin: 5px 0;
       border: 1px dotted grey;
       white-space: pre-line;
       overflow: hidden;    
    
    }
</style>