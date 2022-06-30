<template>
    <div id="app">
        <div class="bg-grey">
            <div class="container">
            <div class="row gy-4">
                <div class="col-xs-12 col-4" v-for="movie in moviesList" :key="movie.id">
                    <MovieCards :movie="movie">
                        {{ movie.original_title}}
                    </MovieCards>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>



<script>
import axios from "axios";
import MovieCards from "./MovieCards.vue";

export default {
    components: {
    MovieCards,
},
    props: {
        searchText: String,
    },
    data() {
        return {
            moviesList: []
        }
    },
    methods: {
        /**
         *
         * @param {"movie"|"tv"} type
         */
        fetchData(type) {
            console.log("topolino")
            axios.get("https://api.themoviedb.org/3/search/" + type, {
                params: {
                    api_key: "4748e32efaeb377f469c7ccfd87624c6",
                    query: this.searchText,
                    language: "it-IT",
                },
            })
                .then((resp) => {
                this.moviesList = resp.data.results;
            });
        },
    },
    watch: {
        searchText: function () {
            this.fetchData("movie");
            this.fetchData("tv");
        },
    }}

</script>






<style>
.bg-grey {
    background-color: rgb(53, 52, 52);
    height: 100%;
    padding: 30px;
}


</style>