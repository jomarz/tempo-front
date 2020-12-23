<template>
    <div class="content-section concerts-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNav :navTitle="navTitle" :menuItems="menuItems"/>
            </div>
        </div>
        <div class="row grid-row">
            <div class="col">
                <ArticleGrid />
            </div>
        </div>
    </div>    
</template>

<script>
import ArticleGrid from './ArticleGrid.vue';
import SectionNav from './SectionNav.vue'
export default {
    components: { SectionNav, ArticleGrid },
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