<template>
  <div id="app">
    <TheSearchBar @searchTextChanged="onSearchTextChanged"></TheSearchBar>
    <TheMain :searchText="searchText" :moviesList="moviesList"></TheMain>

  </div>
</template>

<script>
import TheSearchBar from './components/TheSearchBar.vue';
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: {
    TheSearchBar,
    TheMain
},
  data() {
    return {
      searchText: "",
      moviesList: []
    }
  },
  methods: {
    onSearchTextChanged(userInput) {
      this.searchText = userInput;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
