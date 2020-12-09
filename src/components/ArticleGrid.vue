<template>
    <div class="article-grid event-grid container flex-wrap">
        <template v-if="contentType === 'event'">
            <template v-for="content in contentList" :key="content">
                <div class="col-md-4 small-box-container">
                    <content-small-box />
                </div>
            </template>            
        </template>
        <template v-else-if="contentType === 'article'">
            <template v-for="content in contentList" :key="content">
                <div class="col-lg-4">
                    Article
                </div>
            </template>
        </template>
    </div>
</template>

<script>
import ContentSmallBox from './ContentSmallBox.vue';
export default {
  components: { ContentSmallBox },
    
    setup () {
        const contentType = "event";
        const contentList = [1,2,3,4,5,6,7,8,9,10];
        return { contentType, contentList };
    }
}
</script>

<style lang="scss" scoped>
    .article-grid.container {
        display: flex;
        padding: 40px 25px 0 0; 
        .small-box-container {
            padding-left: 20px;
        }
    }
</style>