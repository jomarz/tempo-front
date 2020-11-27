<template>
  <div class="content-container">
    <TopBar />
    <NavBar />
    <Featured />
    <ad-full-width />
    <concerts-section />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import NavBar from './components/NavBar.vue';
import Featured from './components/Featured.vue';
import AdFullWidth from './components/AdFullWidth.vue';
import ConcertsSection from './components/ConcertsSection.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    NavBar,
    Featured,
    AdFullWidth,
    ConcertsSection
  }
}
</script>

<style lang="scss">
  
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto+Condensed:wght@700&family=Roboto:wght@300;400;700&display=swap');

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
    h1 {
      font-size: 3.2rem !important;
      font-family: 'Playfair display';
    }
    h2 {
      font-size: 2rem !important;
      font-family: 'Playfair display';
    }
    h3 {
      font-size: 1.45rem !important;
      font-family: 'Playfair display';
    }
    h4 {
      font-size: 1.2rem !important;
      font-family: 'Playfair display';
      font-weight: 700;
    }
    h5 {
      font-size: 0.95rem !important;
      font-family: 'Playfair display';
    }
    h6 {
      font-size: 0.8rem !important;
      font-family: 'Playfair display';
    }
    p {
      font-size: 0.75rem !important;
      font-family: 'Roboto', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      }
    ul.nav-menu {
        list-style: none;
        padding-left: 25px;
        li {
        text-decoration: none;
        display: inline;
            a {
                text-decoration: none;
                display: inline-flex;
                flex-direction: column;
                color: black;
            }
            a::after {
                content: attr(data-text);
                content: attr(data-text) / "";
                height: 0;
                visibility: hidden;
                overflow: hidden;
                user-select: none;
                pointer-events: none;
                font-weight: 700;

                @media speech {
                    display: none;
                }
            }
            a:hover {
                font-weight: 700;
            } 
        }
    }
    .section-title-container {
      padding: 10px 0 10px 0;
      border-right: 1px solid black;
    }
    h3.section-nav-title {
      line-height: 1.5rem;
    }
  }

</style>
