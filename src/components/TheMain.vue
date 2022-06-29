<template>
    <div id="app">
        <ul>
            <li>

            </li>
        </ul>


    </div>
</template>



<script>
import axios from "axios";

export default {
    data() {
        return {
            moviesList: []
        }
    },
    methods: {
        fetchData() {
            axios.get("https://api.themoviedb.org/3/search/", {
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
}

</script>






<style>



</style>