<template>
    <div class="content-grid container">
        <div class="grid-column flex-wrap">
            <template v-for="content in contentList" :key="content">
                <div class="small-box-container">
                    <article-small-box  :boxContent="content"/>
                </div>
            </template>
        </div>
        <div class="grid-nav-column carousel-nav">
            <a href="" @click.prevent="store.articlesCarousel.moveUp()"><img src="..\assets\img\icons\Arrows\YellowArrows_top.svg" alt="up"></a>
            <a href="" @click.prevent="store.articlesCarousel.moveDown()"><img src="..\assets\img\icons\Arrows\YellowArrows_down.svg" alt="down"></a>
        </div>
    </div>
    <div class="mobile-grid">
        <horizontal-carousel :contentList="contentList" componentName="article-small-box"/>
    </div>
</template>

<script>
import store from '../store/store'
import ArticleSmallBox from './ArticleSmallBox.vue';
import HorizontalCarousel from './HorizontalCarousel.vue';
export default {
    components: { ArticleSmallBox, HorizontalCarousel },
    props: {
        contentList: {
            required: true,
            type: Array
        }
    },
    setup() {
        return { store }
    }
}
</script>

<style lang="scss" scoped>
    .content-grid.container {
        display: flex;
        padding-left: 0;
        padding-right: 0;
        .small-box-container {
            padding-left: 15px;
            padding-right: 0px;
        }
        .grid-column {
            display: flex;
            width: 96%;
        }
        .grid-nav-column {
            width: 19px;
            padding: 5px 1px 0;
        }
    }
</style>