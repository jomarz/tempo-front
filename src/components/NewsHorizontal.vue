<template>
    <div class="news-horizontal">
        <div class="news-box-column">
            <h3>Noticias</h3>
            <horizontal-carousel :contentList="newsList" componentName="news-small-box"/>
        </div>
        <NewsCTA />
    </div>
</template>

<script>
import NewsCTA from "./NewsCTA.vue";
import HorizontalCarousel from './HorizontalCarousel.vue';

export default {
    props: {
        newsList : {
            required: true,
            type: Array
        }
    },
    components: {
        NewsCTA, HorizontalCarousel
    },
    setup() {
        return {  }
    }
}
</script>

<style lang="scss" scoped>
    .news-horizontal {
        h3 {
            margin-bottom: 15px;;
        }
    }

</style>