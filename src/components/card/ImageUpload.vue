<template>
    <div class="row">
        <div class="col-sm-12">
            <h4>Upload Image:</h4>    
            <div class="file-field">
                <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile">
            </div>
                <div class="progress" style="width: 200px">
                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progressBar"></div>
                </div>
            <br/>
            <img id="image">
            <button type="button" id="setImageButton" class="btn purple-gradient">Set Image</button>
        </div>        
    </div>
</template>

<script>
import Firebase from 'firebase'

export default {
    data: function () {
        return {
            file: ''
        }
         
    },
    methods: {
        uploadFile: function (event) {
            this.file = event.target.files[0]
            var storageRef = Firebase.storage().ref('user_uploads/' + this.file.name)
            var upload = storageRef.put(this.file)

            var reader = new FileReader()
            reader.readAsDataURL(this.file)

            reader.onload = function (e) {
                document.getElementById('image').src = e.target.result
            }
            upload.on('state_changed', function(snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById('progressBar').style = "width:" + progress + "%"
            })

            this.$emit('displayImageChanged', this.file.name)
        }
    }
}
</script>

<style scoped>
    img {
        max-width: 200px;
    }
</style>