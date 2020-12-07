<template>
    <div class="article-grid event-grid container flex-wrap">
        <template v-for="content in contentList" :key="content">
            <template v-if="contentType === 'event'">
                <div class="col-md-4">
                    Event
                </div>
            </template>
            <template v-else-if="contentType === 'article'">
                <div class="col-lg-4">
                    Article
                </div>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    
    setup () {
        const contentType = "event";
        const contentList = [1,2,3,4,5,6,7,8,9];
        return { contentType, contentList };
    }
}
</script>

<style lang="scss" scoped>
    .article-grid.container {
        display: flex;
    }
</style>