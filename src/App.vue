<template>
  <div id="app">
    <TheSearchBar></TheSearchBar>

  </div>
</template>

<script>
import TheSearchBar from './components/TheSearchBar.vue';

export default {
  name: 'App',
  components: {
    TheSearchBar
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
