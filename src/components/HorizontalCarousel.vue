<template>
    <div class="horizontal-carousel">
        <div class="content-wrapper">
                <component v-for="content in contentList" :key="content.id" :is="componentName" :boxContent="content" ></component>
        </div>
    </div>
</template>

<script>
import ArticleSmallBox from './ArticleSmallBox.vue';
import EventSmallBox from './EventSmallBox.vue';
import NewsSmallBox from './NewsSmallBox.vue';
import videoSmallBox from './videoSmallBox.vue';

export default {
  components: { ArticleSmallBox, EventSmallBox, NewsSmallBox, videoSmallBox },
    props: {
        componentName: { required: true },
        contentList : { required: true }
    },
    setup(props) {
        if(props.componentName=='video-small-box')
        console.log(props.contentList);
    }
}
</script>

<style lang="scss" scoped>
    @media only screen and (min-width: 768px) {
        .horizontal-carousel {
            display: none;
        }    
    }
    .horizontal-carousel {
        //height: 145px;
        width: 100%;
        //overflow-x: auto;
        overflow-y: hidden;
        .content-wrapper {
            display: flex;
            align-items: center;
            width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-behavior: smooth;
        }
        .event-small-box {
            min-width: 335px;
            margin-right: 25px;
        }
        .article-small-box {
            min-width: 392px;
            margin-right: 25px;
        }
    }
</style>