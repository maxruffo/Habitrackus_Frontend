<template>
  <nav-bar></nav-bar>
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";


export default{
  name: 'App',
  components: { NavBar}
}

</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: darkslategray;
}
html{
  background-color: darkslategray;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #3a502c;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
