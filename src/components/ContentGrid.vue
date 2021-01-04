<template>
    <div class="content-grid container flex-wrap">
        <template v-for="content in contentList" :key="content">
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
        </template>
    </div>
    <div class="mobile-grid">
        <horizontal-carousel v-if="contentType === 'event'" :contentList="contentList"  componentName="event-small-box"/>
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .content-grid.container {
        display: flex;
        padding-left: 0;
        .small-box-container {
            padding-left: 20px;
        }
    }
</style>