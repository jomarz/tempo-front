<template>
    <div class="content-grid container flex-wrap md-up">
        <template v-for="content in contentList" :key="content">
            <div>
                <template v-if="contentType === 'event'">
                    <div class="small-box-container">
                        <event-small-box :boxContent="content"/>
                    </div>
                </template>
                <template v-else-if="contentType === 'article'">
                    <div class="small-box-container">
                        <article-small-box  :boxContent="content"/>
                    </div>
                </template>
            </div>
        </template>
    </div>
    <div class="mobile-grid">
        <horizontal-carousel v-if="contentType === 'event'" :contentList="contentFullList"  componentName="event-small-box"/>
        <horizontal-carousel v-if="contentType === 'article'" :contentList="contentList" componentName="article-small-box"/>
    </div>
</template>

<script>
import ArticleSmallBox from './ArticleSmallBox.vue';
import EventSmallBox from './EventSmallBox.vue';
import HorizontalCarousel from './HorizontalCarousel.vue';
export default {
  components: { EventSmallBox, ArticleSmallBox, HorizontalCarousel },
    props: {
        contentType: {
            required: true,
            type: String
        },
        contentList: {
            required: true,
            type: Array
        },
        contentFullList: {
            required: true,
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
    .content-grid.container {
        display: flex;
        padding-left: 0;
        padding-right: 0;
        .small-box-container {
            padding-left: 20px;
        }
    }/* 
    @media only screen and (min-width: 768px) and (max-width: 1199px) {
        .content-grid.container {
            max-width: 745px;
        }
    } */
</style>