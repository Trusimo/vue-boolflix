<template>
    <div>
        {{ movieTitle }}
        <span class="fi" :class="'fi-' + languageFlag"></span>
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
        languageFlag() {
        const langsFlag = {
            en: "us",
            ja: "jp",
            it: "it",
            ko: "ko",
            fr: "fr"
    };
        if (langsFlag[this.movie.original_language]) {
        return langsFlag[this.movie.original_language];
    }
        return this.movie.original_language;
    },
    } 
}

</script>

<style>



</style>

