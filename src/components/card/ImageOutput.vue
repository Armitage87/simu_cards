<template>
    <div :style="styleObject" class="img-container">
        <img id="outputImage">{{ displayImage }}
    </div>
</template>

<script>
import Firebase from 'firebase'


export default {
    props: {
        displayImage: {
            type: String
        },
        conteinerHeight: {
            type: Number,
            default: 200
        }
    },
    watch: {
        displayImage: function() {
            var storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage)
            storageRef.getDownloadURL().then(function(url) {
                var img = document.getElementById('outputImage')
                img.src = url
            })
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

<style>
   .img-container {
       border: 1px dotted grey;
       overflow: hidden;
        margin: 5px 0;
   } 
</style>