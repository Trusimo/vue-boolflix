<template>
  <div id="app">
    <TheSearchBar></TheSearchBar>
    <TheMain></TheMain>

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
