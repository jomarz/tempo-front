<template>
    <div class="content-grid md-up">
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
        <horizontal-carousel :contentList="contentFullList" componentName="article-small-box"/>
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
        },
        contentFullList: {
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
    .content-grid {
        display: flex;
        padding-left: 0;
        padding-right: 0;
        .small-box-container {
            padding-right: 15px;
            /* padding-left: 15px;
            padding-right: 0px; */
        }
        .grid-column {
            display: flex;
        }
        .grid-nav-column {
            padding: 0px 10px 0 0;
            a img {
                width: 17px;
            }
        }
    }
    @media only screen and (min-width: 850px) and (max-width: 1199px) {
        .content-grid {
            margin-left: 40px;
            .small-box-container {
                /* padding-left: 13px; */
            }
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 849px) {
        .content-grid {
            margin-left: 10px;
            .small-box-container {
                padding-right: 13px;
            }
        }
    }
</style>