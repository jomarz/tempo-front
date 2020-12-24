<template>
    <div class="content-section concerts-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNav :navTitle="navTitle" :menuItems="menuItems"/>
            </div>
        </div>
        <div class="row grid-row">
            <div class="col-12 col-md-9">
                <ArticleGrid />
            </div>
            <div class="col-12 col-md-3">
                <NewsVertical />
            </div>
        </div>
    </div>    
</template>

<script>
import ArticleGrid from './ArticleGrid.vue';
import SectionNav from './SectionNav.vue';
import NewsVertical from './NewsVertical.vue';
export default {
    components: { SectionNav, ArticleGrid, NewsVertical },
    setup() {
        const navTitle = "Artículos/Noticias";
        const menuItems = [
            { text: 'Clásica', url: "#" },
            { text: 'Ópera', url: "#" },
            { text: 'Jazz', url: "#" },
            { text: 'World Music', url: "#" }
            ];
        return { navTitle, menuItems };
    }
}
</script>

<style lang="scss" scoped>

</style>