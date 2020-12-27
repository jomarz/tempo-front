<template>
    <div class="news-vertical">
        <h3>Noticias</h3>
        <news-small-box v-for="newsElement in newsList" :newsElement="newsElement" :key="newsElement.key" />
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

</style>