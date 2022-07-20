<template>
    <!-- <div class="content-section articles-section container-fluid">
        <div class="row">
            <div class="col pl-0 pr-0 section-nav-row">
                    <SectionNav :navTitle="navTitle" :menuItems="menuItems" section="articles" />
            </div>
        </div>
        <div class="row article-grid-row">
            <div class="articles-block">
                <ArticlesGrid :contentType="contentType" :contentList="contentList" :contentFullList="contentFullList" class="articles-block"/>
            </div>
            <div class="news-vertical-block">
                <NewsVertical :newsList="newsList" />
            </div>                
        </div>
        <div class="row grid-row horizontal-news">
            <div class="col">
            <news-horizontal :newsList="newsFullList" />
            </div>
        </div>
    </div> -->    
    
    <div class="content-section articles-section">
            <div class="section-nav-row">
                    <SectionNav :navTitle="navTitle" :menuItems="menuItems" section="articles" />
            </div>
            <div class="articles-section-content">
                <div class="article-grid-row">
                    <div class="articles-block">
                        <ArticlesGrid :contentType="contentType" :contentList="contentList" :contentFullList="contentFullList" class="articles-block"/>
                    </div>
                    <div class="news-vertical-block">
                        <NewsVertical :newsList="newsList" />
                    </div>                
                </div>
                <div class="grid-row horizontal-news">
                    <news-horizontal :newsList="newsFullList" />
                </div>
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
        const navTitle = "Artículos";
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
            if(store.sectionFilter.articles.applyFilter) {
                var filteredContent = this.contentUnfilteredFullList.filter( element => {
                    return element.musicGenre.includes(store.sectionFilter.articles.filter);
                });
                return filteredContent;
            }
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

<style lang="scss">
    .articles-section {
        width: 100%;
        margin: 20px 0 0;
        .section-nav-row {
            padding: 0;
        }
        .article-grid-row {
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 40px 0 0;
        }
    }
    @media only screen and (min-width: 768px) {
        .articles-block {
            padding: 0 !important;
        }
        .news-vertical-block {
            padding: 0 !important;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1160px) {
        .news-vertical-block {
            margin-right: 20px;
        }
    }
    @media only screen and (max-width: 767px) {
        .articles-block {
            padding: 0 !important;
            .horizontal-carousel {
                padding: 0;
            }
        }
    }
    @media only screen and (max-width: 1069px) {
        .news-vertical-block {
            display: none;
        }
        .articles-section-content {
            margin: 0 20px;
        }
        .articles-block {
            max-width: 100%;
        }
        .horizontal-news .horizontal-carousel{
            display: block;
            padding: 0;
            .news-small-box {
                margin-right: 20px;
            }
        }
    }
    @media only screen and (min-width: 1070px) {
        .articles-block {
            max-width: 75% !important;
            padding: 0 !important;
        }
        .horizontal-news {
            display: none;
        }
    }
</style>