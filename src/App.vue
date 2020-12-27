<template>
  <div class="content-container">
    <TopBar />
    <NavBar />
    <Featured />
    <ad-box class="ad-row"/>
    <concerts-section />
    <ad-box class="ad-row"/>
    <videos-section />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-9 pl-0 pd-0 pd-md-2">
          <ad-box class="ad-row"/>
        </div>
        <div class="col-12 col-md-3 pr-0 pl-0 pl-md-2">
          <ad-box class="ad-row"/>
        </div>
      </div>
    </div>
    <articles-section />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-9 pl-0 pd-0 pd-md-2">
          <ad-box class="ad-row"/>
        </div>
        <div class="col-12 col-md-3 pr-0 pl-0 pl-md-2">
          <ad-box class="ad-row"/>
        </div>
      </div>
    </div>
    <albums-section />
    <ad-box class="ad-row"/>
  </div>
  <Footer />
</template>

<script>
import TopBar from './components/TopBar.vue';
import NavBar from './components/NavBar.vue';
import Featured from './components/Featured.vue';
import ConcertsSection from './components/ConcertsSection.vue';
import AdBox from './components/AdBox.vue';
import VideosSection from './components/VideosSection.vue';
import ArticlesSection from './components/ArticlesSection.vue';
import AlbumsSection from './components/AlbumsSection.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    NavBar,
    Featured,
    ConcertsSection,
    AdBox,
    VideosSection,
    ArticlesSection,
    AlbumsSection,
    Footer
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
    h1 {
      font-size: 3.2rem !important;
      font-family: 'Playfair display';
    }
    h2 {
      font-size: 2rem !important;
      font-family: 'Playfair display';
    }
    h3 {
      //font-size: 1.45rem !important;
      font-size: 1.25rem !important;
      font-family: 'Playfair display';
      font-weight: 700;
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
      font-weight: 700;
    }
    p {
      font-size: 0.75rem !important;
      font-family: 'Roboto', sans-serif;
      line-height: 1.18rem;
      font-weight: 300;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      }
    button {
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: 0.55rem;
        font-weight: 700;
        letter-spacing: 0.045rem;
        background-color: #278de2;
        width: 113px;
        border-style: none;
        border-radius: 5px;
        margin-left: 20px;
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
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
    .more-link {
      color: #278de2;
      display: block;
      font-family: 'Roboto', sans-serif;
      font-size: 0.60rem;
      font-weight: 700;
      text-decoration: none;
    }
    .section-nav .section-title-container {
      padding: 10px 0 10px 0;
      border-right: 1px solid black;
    }
    h3.section-nav-title {
      line-height: 1.5rem;
    }
    .content-section {
        margin: 40px 0 40px 0;
        .calendar-row {
            padding: 40px 0 04px 0;
        }
        .grid-row {
            padding: 40px 0 0 0;
        }
    }
    /* CTA text and link styles */
    .receive-cta {
        h6 {
            font-family: 'Roboto', sans-serif;
            font-size: 0.65rem !important;
            display: inline;
            font-weight: 400;
        }
    }
    .receive-cta.printed-cta .receive-button {
      margin-left: 0px;
    }

    /* ad boxes styles*/
    .ad-row {
      height: 115px;
    }
    .ad-small {
      height: 100%;
    }

    /* Footer styles */
  }
  .footer {
    margin-top: 70px;
    width: 100%;
    background-color: #f1f2f2;
    height: 217px;
  }

</style>
