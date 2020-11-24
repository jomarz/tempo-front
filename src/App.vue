<template>
  <NavBar />
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
  html, body {
    font-size: 20px;
  }
  body {
    margin: auto;
    padding: 0;
    max-width: 1140px;
    background-color: white;
    color: black;
  }
</style>
