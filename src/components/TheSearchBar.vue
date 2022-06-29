<template>
    <div id="app">
        <div class="container">
        <input type="text" v-model="userSearch">
            <button @click="cerca">Cerca</button>
        </div>

    </div>
</template>

<script>
import {state} from "../store";

export default {
    name: 'TheSearchBar',
    data() {
        return {
            userSearch: ""
}},
    methods: {
        cerca() {
            console.log("paperino")
            state.searchText = this.userSearch;
            this.$emit("searchTextChanged", this.userSearch)
        }
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