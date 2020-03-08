<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <sc-text-input @displayTextChanged="textBoxValue1=$event"></sc-text-input>
            <sc-section-completed></sc-section-completed>
        </div>
        <div class="col-sm-6 card card-display">
            <sc-text-output :displayText="textBoxValue1" :conteinerHeight="750"></sc-text-output>
        </div>
    </div> 
</template>
 
<script>
import TextInput from './TextInput.vue'
import TextOutput from './TextOutput.vue'
import SectionCompleted from './SectionCompleted.vue'


export default {
    data: function () {
        return {
            textBoxValue1: ''
        }
    },
    components: {
        scTextInput: TextInput,
        scTextOutput: TextOutput,
        scSectionCompleted: SectionCompleted
    }
}
</script>

<style>
 
</style>