<template>
    <div id="app">
        <div class="container">
        <input type="text" v-model="searchText">
            <button>Cerca</button>
        </div>

    </div>
</template>

<script>
import {state} from "../store";

export default {
    name: 'TheSearchBar',
    data() {
        return {
            
}}
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