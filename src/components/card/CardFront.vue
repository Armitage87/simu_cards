<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <sc-text-input @displayTextChanged="textBoxValue1=$event"></sc-text-input>
            <sc-image-upload @displayImageChanged="imageName = $event"></sc-image-upload><hr>
            <sc-text-input @displayTextChanged="textBoxValue2=$event"></sc-text-input>
            <sc-text-input @displayTextChanged="textBoxValue3=$event"></sc-text-input>
        </div>
        <div class="col-sm-6 card card-display">
            <sc-text-output :displayText="textBoxValue1" :conteinerHeight="130"></sc-text-output><hr>
            <sc-image-output :displayImage="imageName" :conteinerHeight="350" :clearImageProp="clearImage"></sc-image-output><hr>
            <sc-text-output :displayText="textBoxValue2" :conteinerHeight="130"></sc-text-output><hr>
            <sc-text-output :displayText="textBoxValue3" :conteinerHeight="130"></sc-text-output><hr> 
        </div>
    </div> 
</template>
 
<script>
import ImageOutput from './ImageOutput'
import TextInput from './TextInput.vue'
import TextOutput from './TextOutput.vue'
import ImageUpload from './ImageUpload.vue'

export default {
    data: () => {
      return {
          textBoxValue1: '',
          textBoxValue2: '',
          textBoxValue3: '',
          imageName: ''
      }  
    },
    methods: {
        clearImage: function () {
            if(this.imageName != ''){
            this.imageName = "default_image.png"
            }
        }
    },
    components: {
        scTextInput: TextInput,
        scTextOutput: TextOutput,
        scImageUpload: ImageUpload,
        scImageOutput: ImageOutput
    }    
}
</script>

<style>
    .edit-area {
        background: #f3e5f5;
        padding: 20px;
        height: 800px;
    }

    .card-display {
        height: 800px;
        padding: 20px;
    }
</style>