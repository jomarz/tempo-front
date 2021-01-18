<template>
    <div class="content-section concerts-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNav :navTitle="navTitle" :menuItems="menuItems"/>
            </div>
        </div>
        <div class="row grid-row">
            <div class="col-12 col-md-9 articles">
                <ArticlesGrid :contentType="contentType" :contentList="contentList" />
            </div>
            <div class="col-12 col-md-3 md-up">
                <NewsVertical :newsList="newsList" />
            </div>
            <news-horizontal :newsList="newsList" />
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
            { text: 'Clásica', url: "#" },
            { text: 'Ópera', url: "#" },
            { text: 'Jazz', url: "#" },
            { text: 'World Music', url: "#" }
            ];
        const contentType = "article";
        /* const contentList = [
            { id: '1', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa1/200/300" },
            { id: '2', title: "Marcelo Lomb...", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa2/200/300" },
            { id: '3', title: "Valery Gergiev", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa3/200/300" },
            { id: '4', title: "Deutsche Gram...", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa4/200/300" },
            { id: '5', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa5/200/300" },
            { id: '6', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa6/200/300" },
            { id: '7', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa7/200/300" },
            { id: '8', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa8/200/300" },
        ]; */
        /* const newsFullList = [
            { id: '1', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgeaaa/200/300" }, 
            { id: '2', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgebb/200/301" }, 
            { id: '3', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgecc/200/302" }, 
            { id: '4', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgeaaa1/200/300" }, 
            { id: '5', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgebb2/200/301" }, 
            { id: '6', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgecc3/200/302" }, 
            { id: '7', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgecc4/200/302" }, 
            { id: '8', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgeaaa5/200/300" }, 
            { id: '9', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgebb6/200/301" }, 
            { id: '10', title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgecc7/200/302" }, 
        ]; */
        const articlesAPI = new ArticlesAPI();
        const newsAPI = new NewsAPI();
        const newsFullList = ref([]);
        var contentFullList = ref([]);
        var numArticles = 24;
        var batchOffset = 0;
        var articlesPerPage = 8;
        store.articlesCarousel.setElemsPerPage(articlesPerPage);
        const getArticles = function(numArticles, offset, advanceCarousel = false) {
            articlesAPI.getPosts(numArticles, offset, (data)=> {
                contentFullList.value = Object.entries(contentFullList.value).map(entry => entry[1]).concat(Object.entries(data.data.posts).map(entry => entry[1]));
                store.articlesCarousel.setNumPages(Object.entries(contentFullList.value).length); 
                if( advanceCarousel ) store.articlesCarousel.moveDown();
                });
        };
        const getMoreAticles = function(advanceCarousel = false) {
            batchOffset += numArticles;
            getArticles(numArticles, batchOffset, advanceCarousel);
        };
        getArticles(numArticles, batchOffset);
        store.articlesCarousel.setNumPages(Object.entries(contentFullList.value).length);
        store.articlesCarousel.setListExtender(() => getMoreAticles(true));
        newsAPI.getPosts(30, 0, (data)=> {
                newsFullList.value = Object.entries(newsFullList.value).map(entry => entry[1]).concat(Object.entries(data.data.posts).map(entry => entry[1]));
                store.newsCarousel.setNumPages(Object.entries(newsFullList.value).length);
                });
        store.newsCarousel.setNumPages(newsFullList.value.length);
        return { navTitle, menuItems, contentType, contentFullList, newsFullList };
    },
    computed: {
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
    .concerts-section {
        .articles {
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>