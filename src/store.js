import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
    moviesList: [],
    searchText: ""
});

export function searchMovies(searchText) {
    console.log("axios")
    axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: "4748e32efaeb377f469c7ccfd87624c6",
            query: searchText,
            language: "it-IT",
        },
    })
    .then((resp) => {
        state.moviesList = resp.data.results;
    });
}