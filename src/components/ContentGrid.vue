<template>
    <div class="content-grid container flex-wrap">
        <template v-if="contentType === 'event'">
            <template v-for="content in contentList" :key="content">
                <div class="small-box-container">
                    <event-small-box />
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
import EventSmallBox from './EventSmallBox.vue';
export default {
  components: { EventSmallBox },
    
    setup () {
        const contentType = "event";
        const contentList = [1,2,3,4,5,6,7,8,9];
        return { contentType, contentList };
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