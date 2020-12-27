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
            { id: 1, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 2, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 3, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 4, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 5, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 6, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 7, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 8, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
        ];
        const newsList = [
            { id: 1, title: "Imodipic iissimus", text: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/200/300" }, 
            { id: 2, title: "Imodipic iissimus", text: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/200/301" }, 
            { id: 3, title: "Imodipic iissimus", text: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/200/302" }, 
        ];
        return { navTitle, menuItems, contentType, contentList, newsList };
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