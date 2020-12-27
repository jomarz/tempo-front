<template>
    <div class="news-vertical">
        <h3>Noticias</h3>
        <div class="news-box-container" v-for="newsElement in newsList" :key="newsElement.key" >
            <news-small-box :newsElement="newsElement" />
        </div>
    </div>
</template>

<script>
import NewsSmallBox from "./NewsSmallBox.vue";

export default {
    props: {
        newsList : {
            required: true,
            type: Array
        }
    },
    components: {
        NewsSmallBox
    }    
}
</script>

<style lang="scss" scoped>
    .news-box-container {
        margin-top: 25px;
    }
</style>