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
</template>

<script>
import ArticleSmallBox from './ArticleSmallBox.vue';
import EventSmallBox from './EventSmallBox.vue';
export default {
  components: { EventSmallBox, ArticleSmallBox },
    props: {
        contentType: {
            required: true,
            type: String
        },
        contentList: {
            required: true,
            type: Array
        }
    },
    setup () {
        //const contentType = "event";
        //const contentList = [1,2,3,4,5,6,7,8,9];
        return { /* contentType, contentList */ };
    }
}
</script>

<style lang="scss" scoped>
    .content-grid.container {
        display: flex;
        padding: 40px 25px 0 0; 
        .small-box-container {
            padding-left: 20px;
        }
    }
</style>