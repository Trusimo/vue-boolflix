<template>
    <div id="app">
        <div class="container">
        <input type="text" v-model="searchText">
            <button @click="searchMovies">Cerca</button>
        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'TheSearchBar',
    components: {
        
    },
    data() {
        return {
            apiUrl: "https://api.themoviedb.org/3/search/movie",
            params: {
                api_key: "4748e32efaeb377f469c7ccfd87624c6",
                query: searchText,
                language: "it-IT",
        },
            movieList: []
        }
    },
    methods: {
        fetchApp() {
            axios.get(this.apiUrl).then((resp) => {
                this.movieList = resp.data.response;
            })
        },
        searchMovies(searchText) {

        }
    },
    mounted() {
        this.fetchApp();
    },
}
</script>

<style lang="scss">

input {
    padding: 8px;
}

button {
    padding: 8px 20px;
}
</style>