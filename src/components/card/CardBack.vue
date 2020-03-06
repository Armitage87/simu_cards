<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <sc-image-upload @displayImageChanged="imageName = $event"></sc-image-upload><hr>
        </div>
        <div class="col-sm-6 card card-display">
            <sc-image-output :displayImage="imageName" :conteinerHeight="400" :clearImageProp="clearImage"></sc-image-output><hr>
            © 2020 Copyright: Simu Cards
        </div>
    </div> 
</template>
 
<script>
import ImageUpload from './ImageUpload.vue'
import ImageOutput from './ImageOutput'

export default {
    data: () => {
      return {
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
        scImageUpload: ImageUpload,
        scImageOutput: ImageOutput
    }   
}
</script>

<style>
    
</style>