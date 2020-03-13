<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <sc-image-upload @displayImageChanged="imageName = $event"></sc-image-upload><hr>
            <sc-section-completed></sc-section-completed>
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
import SectionCompleted from './SectionCompleted.vue'
import { ClearImageMixin } from '../../clearImageMixin'

export default {
    mixins: [ClearImageMixin],
    data: () => {
      return {
          imageName: ''
      }  
    },
    components: {
        scImageUpload: ImageUpload,
        scImageOutput: ImageOutput,
        scSectionCompleted: SectionCompleted
    }   
}
</script>

<style>
    
</style>