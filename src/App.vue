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
    onSearchTextChanged(userSearch) {
      this.searchText = userSearch;
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";
#app {
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredoka:wght@400;700&display=swap');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
