<template>
  <div class="content-container">
    <TopBar />
    <NavBar />
    <Featured />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import NavBar from './components/NavBar.vue';
import Featured from './components/Featured.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    NavBar,
    Featured
  }
}
</script>

<style lang="scss">
  
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@300;400;700&display=swap');

  html, body {
    font-size: 20px;
  }
  body {
    margin: auto;
    padding: 0px;
    background-color: white;
    color: black;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }

</style>
