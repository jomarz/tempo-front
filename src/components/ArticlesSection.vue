<template>
    <div class="content-section concerts-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNav :navTitle="navTitle" :menuItems="menuItems"/>
            </div>
        </div>
        <div class="row grid-row">
            <div class="col-12 col-md-9 articles">
                <ContentGrid :contentType="contentType" :contentList="contentList" />
            </div>
            <div class="col-12 col-md-3">
                <NewsVertical :newsList="newsList" />
            </div>
        </div>
    </div>    
</template>

<script>
import store from '../store/store.js';
import ContentGrid from './ContentGrid.vue';
import SectionNav from './SectionNav.vue';
import NewsVertical from './NewsVertical.vue';
export default {
    components: { SectionNav, ContentGrid, NewsVertical },
    setup() {
        const navTitle = "Artículos/Noticias";
        const menuItems = [
            { text: 'Clásica', url: "#" },
            { text: 'Ópera', url: "#" },
            { text: 'Jazz', url: "#" },
            { text: 'World Music', url: "#" }
            ];
        const contentType = "article";
        const contentList = [
            { id: '1', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa1/200/300" },
            { id: '2', title: "Marcelo Lombardero", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa2/200/300" },
            { id: '3', title: "Valery Gergiev", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa3/200/300" },
            { id: '4', title: "Deutsche Grammophon", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa4/200/300" },
            { id: '5', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa5/200/300" },
            { id: '6', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa6/200/300" },
            { id: '7', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa7/200/300" },
            { id: '8', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/jorgeaa8/200/300" },
        ];
        const newsFullList = [
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
        ];
        store.newsCarousel.setNumPages(newsFullList.length);
        return { navTitle, menuItems, contentType, contentList, newsFullList };
    },
    computed: {
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
        }
    }
</style>