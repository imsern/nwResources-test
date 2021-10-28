<template>
    <div id="nav">
      <div class="container">
          <div><router-link class="navHover" to="/">Home</router-link></div>
          <Resources title="Resources" />
          
      </div>
      
    </div>
</template>

<script>
import Resources from './Resources.vue'


export default {
    name: 'Navbar',
    components: {
        Resources,
    },
}
</script>

<style scoped>
#nav {
  max-height: 15px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}
.container {
    width: 20vw;
    display: flex;
    justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: #9b9b9b;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #d38d0b;
}
.navHover:hover {
  border-bottom: 2px solid orange;
}
</style>