<template>
    <div>
        {{ movieTitle }}
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
    }}
}

</script>

<style>



</style>

