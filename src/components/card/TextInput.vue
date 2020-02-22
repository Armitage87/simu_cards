<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="md-form">
                <label for="textareainput"><h4>Edit Text:</h4></label><br /><br />
                <textarea id="textareainput" class="form-control rounded-0" rows="3" 
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