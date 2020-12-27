<template>
    <div class="news-vertical">
        <div class="news-box-column">
            <h3>Noticias</h3>
            <div class="news-box-container" v-for="newsElement in newsList" :key="newsElement.key" >
                <news-small-box :newsElement="newsElement" />
            </div>
        </div>
        <NewsCTA />
    </div>
</template>

<script>
import NewsCTA from "./NewsCTA.vue";
import NewsSmallBox from "./NewsSmallBox.vue";

export default {
    props: {
        newsList : {
            required: true,
            type: Array
        }
    },
    components: {
        NewsSmallBox, NewsCTA
    }    
}
</script>

<style lang="scss" scoped>
    .news-box-column {
        margin-bottom: 20px;
        .news-box-container {
            margin-top: 25px;
        }
    }
</style>