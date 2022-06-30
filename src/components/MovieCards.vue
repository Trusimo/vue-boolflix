<template>
    <div>
        {{ movieTitle }}
        {{ movieLanguage }}
    </div>

</template>

<script>
export default {
    props: {
        movie: Object,
    },
    computed: {
        movieTitle() {
            console.log("pippo")
        if (this.movie.name) {
            return this.movie.name;
        }
        return this.movie.title;
    },
        movieLanguage() {
            console.log("lingua")
            if (this.movie.original_language) {
                return this.movie.original_language
            }
            return this.movie.original_language
        }
    } 
}

</script>

<style>



</style>

