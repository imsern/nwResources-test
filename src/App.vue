<template>
  <div id="app">
    <Bakgrunn />
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Bakgrunn from './components/Bakgrunn.vue'
import Navbar from './components/Navbar/Navbar.vue'

export default {
  name: 'App',
  components: {
    Bakgrunn,
    Navbar,
  },
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
body {
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
</style>
