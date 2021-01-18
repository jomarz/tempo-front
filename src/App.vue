<template>
  <div class="content-container">
    <div id="top"></div>
    <TopBar />
    <NavBar class="md-up" />
    <Featured class="md-up"/>
    <ad-box class="ad-row" :ad="homeAdsList.HOME_COVER_BOTTOM_FULL_BANNER" />
    <concerts-section :ad="homeAdsList['HOME_EVENTS_TOP_RIGHT_HALF_BANNER']" id="concerts"/>
    <ad-box class="ad-row" :ad="homeAdsList['HOME_EVENTS_BOTTOM_FULL_BANNER']" />
    <videos-section id="videos" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-9 pl-0 pd-0 pd-md-2">
          <ad-box class="ad-row" :ad="homeAdsList['HOME_VIDEOS_BOTTOM_LEFT_BANNER']" />
        </div>
        <div class="col-12 col-md-3 pr-0 pl-0 pl-md-2">
          <ad-box class="ad-row" :ad="homeAdsList['HOME_VIDEOS_BOTTOM_RIGHT_SMALL_BANNER']" />
        </div>
      </div>
    </div>
    <articles-section id="articles" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-9 pl-0 pd-0 pd-md-2">
          <ad-box class="ad-row" :ad="homeAdsList['HOME_NEWS_BOTTOM_LEFT_SMALL_BANNER']" />
        </div>
        <div class="col-12 col-md-3 pr-0 pl-0 pl-md-2">
          <ad-box class="ad-row" :ad="homeAdsList['HOME_NEWS_BOTTOM_RIGHT_BANNER']" />
        </div>
      </div>
    </div>
    <albums-section id="albums" />
    <ad-box class="ad-row" :ad="homeAdsList['HOME_DISCOGRAPHY_BOTTOM_FULL_BANNER']" />
  </div>
  <Footer id="footer" />
  <article-window v-if="store.showArticle.state" @toggle="store.toggleArticle()" />
  <subscribe-window v-if="store.showSubscribe.state" @toggle="store.toggleSubscribe()" />

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
import ArticleWindow from './components/ArticleWindow.vue';

import { ref } from 'vue';

import store from './store/store.js';
import AdsAPI from './classes/AdsAPI';
import AdsList from './classes/AdsList';

import SubscribeWindow from './components/SubscribeWindow.vue';

export default {
  name: 'App',
  data() {
    return { store }
  },
  setup() {
    /* const homeAds = [
      { ad_id: '1',
        image_url: 'https://picsum.photos/id/1002/1200/200',
        link_url: '',
        placing: '1',
        },
      { ad_id: '2',
        image_url: 'https://picsum.photos/id/1002/1200/200',
        link_url: '',
        placing: '2',
        },
      { ad_id: '3',
        image_url: 'https://picsum.photos/id/1002/1200/200',
        link_url: '',
        placing: '3',
        },
      { ad_id: '4',
        image_url: 'https://picsum.photos/id/1002/1200/200',
        link_url: '',
        placing: '4',
        },
      { ad_id: '5',
        image_url: 'https://picsum.photos/id/1002/1200/200',
        link_url: '',
        placing: '5',
        },
      { ad_id: '6',
        image_url: 'https://picsum.photos/id/1002/1200/200',
        link_url: '',
        placing: '6',
        },
    ]; */
    const adsAPI = new AdsAPI();
    const adPositions = [
            "HOME_COVER_BOTTOM_FULL_BANNER",
            "HOME_DISCOGRAPHY_BOTTOM_FULL_BANNER",
            "HOME_EVENTS_BOTTOM_FULL_BANNER",
            "HOME_EVENTS_TOP_RIGHT_HALF_BANNER",
            "HOME_NEWS_BOTTOM_LEFT_SMALL_BANNER",
            "HOME_NEWS_BOTTOM_RIGHT_BANNER",
            "HOME_VIDEOS_BOTTOM_LEFT_BANNER",
            "HOME_VIDEOS_BOTTOM_RIGHT_SMALL_BANNER"
    ];
    const homeAds = new AdsList(adPositions);
    var homeAdsList = ref({
      HOME_COVER_BOTTOM_FULL_BANNER: false,
      HOME_DISCOGRAPHY_BOTTOM_FULL_BANNER: false,
      HOME_EVENTS_BOTTOM_FULL_BANNER: false,
      HOME_EVENTS_TOP_RIGHT_HALF_BANNER: false,
      HOME_NEWS_BOTTOM_LEFT_SMALL_BANNE: false,
      HOME_NEWS_BOTTOM_RIGHT_BANNER: false,
      HOME_VIDEOS_BOTTOM_LEFT_BANNER: false,
      HOME_VIDEOS_BOTTOM_RIGHT_SMALL_BANNER: false
    });
    adsAPI.getAds('home', (data)=> {
      homeAdsList.value = homeAds.buildAdList(data.data);
    });
    return { homeAdsList }
  },
  components: {
    TopBar,
    NavBar,
    Featured,
    ConcertsSection,
    AdBox,
    VideosSection,
    ArticlesSection,
    AlbumsSection,
    Footer,
    ArticleWindow,
    SubscribeWindow
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
      font-size: 2.5rem !important;
      font-family: 'Playfair display';
    }
    h2 {
      font-size: 1.7rem !important;
      font-family: 'Playfair display';
    }
    h3 {
      //font-size: 1.45rem !important;
      font-size: 1.25rem !important;
      font-family: 'Playfair display';
      font-weight: 700;
    }
    h4 {
      font-size: 1.1rem !important;
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
      font-weight: 400;
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
    input {
      border-style: none;
      border-radius: 5px;
      font-family: 'Roboto', sans-serif;
      font-size: 0.65rem;
    }
    a {
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
    }
    /* Box styles */
    .box-subtitle {
        font-size: 0.65rem !important;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        display: block;
    }
    .box-month{
      display: block;
        font-size: 0.65rem !important;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    .box-location {
      display: block;
        font-size: 0.65rem !important;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    .box-text-container {
      overflow: hidden
    }
    p.box-text {
      font-size: 0.65rem !important;
      line-height: 0.77rem;
      padding-top: 4px;
      margin-bottom: 3px;
      overflow: hidden;
    }
    /* Nav styles */
    ul.nav-menu a::after, .footer-links a::after {
        content: attr(data-text);
        content: attr(data-text) / "";
        height: 0;
        display: block;
        visibility: hidden;
        overflow: hidden;
        user-select: none;
        pointer-events: none;
        font-weight: 700;

        @media speech {
            display: none;
        }
    }
    /* ad boxes styles*/
    .ad-row, .ad-box.ad-row {
      height: 115px;
    }
    .ad-small {
      height: 100%;
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
                display: inline-flex;
                flex-direction: column;
                color: black;
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
    /* Footer styles */
  }
  .footer {
    margin-top: 70px;
    width: 100%;
    background-color: #f1f2f2;
  }
  @media only screen and (min-width: 768px) {
    .sm-only {
      display: none !important;
    }
  }
  @media only screen and (max-width: 767px) {
    .md-up {
      display: none !important;
    }
    html, body {
      font-size: 19px;
    }
  }
</style>
