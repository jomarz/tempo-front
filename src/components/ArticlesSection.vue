<template>
    <div class="content-section concerts-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNav :navTitle="navTitle" :menuItems="menuItems" section="articles" />
            </div>
        </div>
        <div class="row grid-row">
            <div class="col-12 col-xl-9 articles">
                <ArticlesGrid :contentType="contentType" :contentList="contentList" :contentFullList="contentFullList" />
            </div>
            <div class="col-12 col-xl-3 xl-up">
                <NewsVertical :newsList="newsList" />
            </div>
            <news-horizontal :newsList="newsFullList" class="sm-only" />
        </div>
    </div>    
</template>

<script>
import store from '../store/store.js';
import { ref } from 'vue'
import ArticlesAPI from '../classes/ArticlesAPI'
import NewsAPI from '../classes/NewsAPI'
import ArticlesGrid from './ArticlesGrid.vue';
import SectionNav from './SectionNav.vue';
import NewsVertical from './NewsVertical.vue';
import NewsHorizontal from './NewsHorizontal.vue';
export default {
    components: { SectionNav, ArticlesGrid, NewsVertical, NewsHorizontal },
    setup() {
        const navTitle = "Artículos/Noticias";
        const menuItems = [
            { text: 'Clásica', url: "#", filter: 'clásica' },
            { text: 'Ópera', url: "#", filter: 'ópera' },
            { text: 'Jazz', url: "#", filter: 'jazz' },
            { text: 'World Music', url: "#", filter: 'world music' }
            ];
        const contentType = "article";
        const articlesAPI = new ArticlesAPI();
        const newsAPI = new NewsAPI();
        const newsFullList = ref([]);
        var contentUnfilteredFullList = ref([]);
        var numArticles = 24;
        var batchOffset = 0;
        var articlesPerPage = 8;
        store.articlesCarousel.setElemsPerPage(articlesPerPage);
        const getArticles = function(numArticles, offset, advanceCarousel = false) {
            articlesAPI.getPosts(numArticles, offset, (data)=> {
                contentUnfilteredFullList.value = Object.entries(contentUnfilteredFullList.value).map(entry => entry[1]).concat(Object.entries(data.data.posts).map(entry => entry[1]));
                store.articlesCarousel.setNumPages(Object.entries(contentUnfilteredFullList.value).length); 
                if( advanceCarousel ) store.articlesCarousel.moveDown();
                });
        };
        const getMoreAticles = function(advanceCarousel = false) {
            batchOffset += numArticles;
            getArticles(numArticles, batchOffset, advanceCarousel);
        };
        getArticles(numArticles, batchOffset);
        store.articlesCarousel.setNumPages(Object.entries(contentUnfilteredFullList.value).length);
        store.articlesCarousel.setListExtender(() => getMoreAticles(true));
        newsAPI.getPosts(30, 0, (data)=> {
                newsFullList.value = Object.entries(newsFullList.value).map(entry => entry[1]).concat(Object.entries(data.data.posts).map(entry => entry[1]));
                store.newsCarousel.setNumPages(Object.entries(newsFullList.value).length);
                });
        store.newsCarousel.setNumPages(newsFullList.value.length);
        return { navTitle, menuItems, contentType, contentUnfilteredFullList, newsFullList };
    },
    computed: {
        contentFullList: function() {
            // Uncomment next block to filter articles
            /* if(store.sectionFilter.articles.applyFilter) {
                var filteredContent = this.contentUnfilteredFullList.filter( element => {
                    console.log(element.musicGenre);
                    return element.musicGenre.includes(store.sectionFilter.articles.filter);
                });
                console.log(filteredContent);
                return filteredContent;
            } */
            return this.contentUnfilteredFullList;
        },
        contentList() {
                return store.articlesCarousel.getCurrentPageList(this.contentFullList);
        },
        newsList() {
            return store.newsCarousel.getCurrentPageList(this.newsFullList);
        }
    }
}
</script>

<style lang="scss" scoped>
  @media only screen and (min-width: 768px) {
    .concerts-section {
        .articles {
            padding-left: 0;
            padding-right: 0;
        }
    }
  }
</style>