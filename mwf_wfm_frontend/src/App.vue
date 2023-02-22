<template>
  <div id="app">
    <baseTable />
    <nav />
    <router-view />
</div>
</template>
<script>
import Nav from './components/partials/Nav.vue';
import baseTable from './components/baseTable.vue';
export default {
  name: 'app',
  components: {
    Nav,
    baseTable,
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>