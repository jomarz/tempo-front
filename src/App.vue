<template>
  <NavBar />
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    /* HelloWorld, */
    NavBar
  }
}
</script>

<style lang="scss">
  body {
    margin: auto;
    padding: 0;
    max-width: 1140px;
    background-color: white;
    color: black;
  }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
