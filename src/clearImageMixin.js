export const ClearImageMixin = {
    methods: {
        clearImage: function () {
            if(this.imageName != ''){
            this.imageName = "default_image.png"
            }
        }
    },
}