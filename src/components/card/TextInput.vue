<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="form-group shadow-textarea">
                <i class="fas fa-pencil-alt prefix"></i>
                <label for="textareainput">Edit Text: </label><br />
                <textarea id="textareainput" 
                class="form-control z-depth-1" 
                rows="3" 
                placeholder="Add text here"
                v-model="textBoxInput"
                @keyup="textChanged"></textarea>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            textBoxInput: ""
        }
    },
    methods: {
        textChanged: function () {
            this.$emit('displayTextChanged', this.textBoxInput)
        }
    }
}
</script>