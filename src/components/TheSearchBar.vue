<template>
    <div id="app">
        <div class="bg-black">
            
            <div class="container flex">

            <div>
                <img class="logo-width" src="../../public/logo.png">
            </div>

            <div class="flex-mod">
                <input type="text" v-model="userSearch">
                <button @click="cerca">Cerca</button>
            </div>

        </div>
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
    background-color: rgb(60, 60, 60);
    color: white
}

button {
    padding: 8px 20px;
    background-color: red;
    color: white;
}

.bg-black {
    background-color: black;
}

.flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
}

.flex-mod {
    display: flex;
    gap: 20px
}

.logo-width {
    width: 250px;
}

</style>