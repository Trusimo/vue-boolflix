<template>
    <div id="app">
        <ul>
            <li v-for="movie in moviesList" :key="movie.id">
                <MovieCards :movie="movie">
                    {{ movie.original_title}}
                    {{ movie.language }}
                    {{ movie.vote_count }}
                </MovieCards>
            </li>
        </ul>
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
        fetchData() {
            console.log("topolino")
            axios.get("https://api.themoviedb.org/3/search/movie", {
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
            this.fetchData();
        },
    }}

</script>






<style>



</style>