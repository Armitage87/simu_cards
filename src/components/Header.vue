<template>
    <div>
        <h1 class="text-center"><b>SIMU CARDS</b><small class="text-muted"> A Harvey&trade; Product</small></h1>
            <nav class="navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
                <a class="navbar-brand" href="#"><img src="../assets/logo.png" width="70" height="60" alt=""></a>
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" @click="pageSelected='cardFront'">Front
                    <span class="sr-only"></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="pageSelected='cardInsideLeft'">Inside Left</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="pageSelected='cardInsideRight'">Inside Right</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="pageSelected='cardBack'">Back</a>
                </li>
                </ul>
            </nav>
    </div>    
</template>

<script>
export default {
    data: function () {
        return {
            pageSelected: ''
        }
    },
    watch: {
        pageSelected: function () {
            this.$emit('pageWasChanged', this.pageSelected)
        }
    }
}
</script>

<style scoped>
    h1 {
        margin-top: 10px;
    }

</style>