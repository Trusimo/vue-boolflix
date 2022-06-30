<template>
    <div class="film-container">
        <img class="locandina-black" :src="locandina">

        <div class="overlay">
            <div class="info-position">
                {{ movieTitle }}
                <span class="fi" :class="'fi-' + languageFlag"></span>
            </div>
        </div>
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

        locandina() {
            const urlBase = "https://image.tmdb.org/t/p/";
            const imgSize = "w342";

            if (this.movie.poster_path) {
                return urlBase + imgSize + this.movie.poster_path;
            }
                return "/imgError.png"
        }
    }
} 

</script>

<style>

.film-container {
    position: relative
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
}

.film-container:hover .overlay {
    opacity: 1;
}

.info-position {
    position: absolute;
    top: 14%;
    left: 4%;
}

.locandina-black:hover {
    opacity: 0;
}

</style>

