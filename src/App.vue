<template>
  <div class="content-container">
    <div id="top"></div>
    <TopBar />
    <NavBar class="md-up" />
    <Featured />
    <ad-box class="ad-row" :ad="homeAdsList.HOME_COVER_BOTTOM_FULL_BANNER" />
    <concerts-section :ad="homeAdsList['HOME_EVENTS_TOP_RIGHT_HALF_BANNER']" id="concerts"/>
    <ad-box class="ad-row" :ad="homeAdsList['HOME_EVENTS_BOTTOM_FULL_BANNER']" />
    <videos-section id="videos" />
    <ad-box class="ad-row" :ad="homeAdsList['HOME_VIDEOS_BOTTOM_FULL_BANNER']" />
    <articles-section id="articles" />
    <ad-box class="ad-row" :ad="homeAdsList['HOME_NEWS_BOTTOM_FULL_BANNER']" />
    <div id="albums-section"></div>
    <albums-section id="" />
    <ad-box class="ad-row" :ad="homeAdsList['HOME_DISCOGRAPHY_BOTTOM_FULL_BANNER']" />
  </div>
  <Footer id="footer" />
  <mobile-menu v-if="store.showMobileMenu.state" @toggle="store.toggleMobileMenu()" class="sm-only"/>
  <article-window v-if="store.showArticle.state" @close-article="closeArticle()" :key="articleKey"/>
  <subscribe-window v-if="store.showSubscribe.state" @toggle="store.toggleSubscribe()" />
  <contact-form v-if="store.showContactForm.state" @toggle="store.toggleContactForm()" />
  <infograph-window v-if="store.showInfograph.state" @toggle="store.toggleInfograph()" />
  <images-modal v-if="store.showImagesModal.state" @toggle="store.toggleImagesModal()" />

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
import InfographWindow from './components/InfographWindow.vue';

import { ref } from 'vue';

import store from './store/store.js';
import AdsAPI from './classes/AdsAPI';
import AdsList from './classes/AdsList';

import SubscribeWindow from './components/SubscribeWindow.vue';
import MobileMenu from './components/MobileMenu.vue';
import ContactForm from './components/ContactForm.vue';
import ImagesModal from './components/ImagesModal.vue';

export default {
  name: 'App',
  data() {
    return { store, articleKey: 0 }
  },
  setup() {
    const adsAPI = new AdsAPI();
    const adPositions = [
            "HOME_COVER_BOTTOM_FULL_BANNER",
            "HOME_DISCOGRAPHY_BOTTOM_FULL_BANNER",
            "HOME_EVENTS_BOTTOM_FULL_BANNER",
            "HOME_EVENTS_TOP_RIGHT_HALF_BANNER",
            "HOME_NEWS_BOTTOM_FULL_BANNER",
            "HOME_VIDEOS_BOTTOM_FULL_BANNER",
    ];
    const homeAds = new AdsList(adPositions);
    var homeAdsList = ref({
      HOME_COVER_BOTTOM_FULL_BANNER: false,
      HOME_DISCOGRAPHY_BOTTOM_FULL_BANNER: false,
      HOME_EVENTS_BOTTOM_FULL_BANNER: false,
      HOME_EVENTS_TOP_RIGHT_HALF_BANNER: false,
      HOME_NEWS_BOTTOM_FULL_BANNER: false,
      HOME_VIDEOS_BOTTOM_FULL_BANNER: false
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
    SubscribeWindow,
    MobileMenu,
    ContactForm,
    InfographWindow,
    ImagesModal
  },
  methods: {
    closeArticle() {
      this.store.toggleArticle();
      this.$router.push('/');
    }
  },
  watch:{
    $route (newRoute){
        document.title = newRoute.meta.title || 'Revista Tempo'; console.log(newRoute);
        if (store.getShowArticleState() && newRoute.path === '/') {
            this.store.toggleArticle();
        }
        if(newRoute.params != undefined && newRoute.params.type != undefined && newRoute.params.permalink != undefined)  {
            var isEvent = 0;
            if(store.getShowArticleState()) {
                this.articleKey += 1;
                /* this.store.toggleArticle();
                console.log(store.getShowArticleState());
                if(newRoute.params.type == 'articulo') {
                    store.setArticlePermalink(newRoute.params.permalink, isEvent);
                    store.openArticle();
                } else if (newRoute.params.type == 'evento') {
                    isEvent = 1;
                    store.setArticlePermalink(newRoute.params.permalink, isEvent);
                    store.openArticle();
                } else {
                    this.$router.push('/');
                } */
            }
            else {
                if(newRoute.params.type == 'articulo') {
                    store.setArticlePermalink(newRoute.params.permalink, isEvent);
                    store.openArticle();
                } else if (newRoute.params.type == 'evento') {
                    isEvent = 1;
                    store.setArticlePermalink(newRoute.params.permalink, isEvent);
                    store.openArticle();
                } else {
                    this.$router.push('/');
                }
            }
        }
        else  console.log('No permalink');
    }
  }, 
    mounted() {
        /* console.log(this.$route);
        if(this.$route.params.permalink == "") console.log("Go home");
        else console.log(this.$route.params.permalink); */
    }
}
</script>

<style lang="scss">
  
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto+Condensed:wght@700&family=Roboto:wght@300;400;700&display=swap');

  html, body {
    font-size: 19px;
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
      max-height: 200px;
    }
    .calendar-row .ad-small {
        img {
            height: 100%;
        }
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
  @media only screen and (min-width: 992px) {
    .md-down {
      display: none !important;
    }
  }
  @media only screen and (max-width: 991px) {
    .lg-up {
      display: none !important;
    }
  }
  @media only screen and (max-width: 1199px) {
    .xl-up {
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
    .ad-row, .ad-box.ad-row {
      padding: 0 15px;
      margin-top: 15px;
      background-color: white;
      max-height: 150px;
    }
    .calendar-row .ad-small {
      padding-right: 15px;
      margin-top: 25px;
      background-color: white;
      height: 150px;
    }
    .double-ad-row .row .col-12:first-of-type {
      padding-right: 0;
    }
    .footer {
      margin-top: 50px;
    }
    .receive-cta{
      margin-top: 20px;
    }
    .content-container .receive-cta h6.receive-title {
      font-size: 0.75rem !important;
    }
    .receive-button {
      width: 140px;
      font-size: 0.75rem;
    }
  }
</style>
