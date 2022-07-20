<template>
    <div class="horizontal-carousel">
        <div class="content-wrapper">
            <div v-for="content in contentList" :key="content.id" class="horizontal-carousel-item">
                <component :is="componentName" :boxContent="content" :inCarousel="true" ></component>
                <div v-if="componentName=='video-small-box'" class="mask-youtube" @click="changeVideo(content)" ></div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store/store'
import ArticleSmallBox from './ArticleSmallBox.vue';
import EventSmallBox from './EventSmallBox.vue';
import NewsSmallBox from './NewsSmallBox.vue';
import VideoSmallBox from './videoSmallBox.vue';
import AlbumSmallBox from './AlbumSmallBox.vue';
import PrintedSmallBox from './PrintedSmallBox.vue';
import RelatedArticleBox from './RelatedArticleBox.vue';

export default {
  components: { ArticleSmallBox, EventSmallBox, NewsSmallBox, VideoSmallBox, AlbumSmallBox, PrintedSmallBox, RelatedArticleBox },
    props: {
        componentName: { required: true },
        contentList : { required: true }
    },
    methods: {
        changeVideo(videoInfo) {
            store.setfeatVideo(videoInfo);
        }
    }
}
</script>

<style lang="scss" scoped>
    @media only screen and (min-width: 768px) {
        .horizontal-carousel {
            display: none;
        }    
    }
    .concerts-section .horizontal-carousel {
        padding: 0;
    }
    .horizontal-carousel {
        padding: 0 15px;
        width: 100%;
        //overflow-x: auto;
        overflow-y: hidden;
        .content-wrapper {
            display: flex;
            width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-behavior: smooth;
        }
        .horizontal-carousel-item {
            position:relative;
        }
        .event-small-box {
            min-width: 335px;
            margin-right: 25px;
        }
        .article-small-box {
            min-width: 392px;
            margin-right: 25px;
        }
        .mask-youtube {
            position: absolute;
            background: rgba(0,0,0,0);
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            cursor: pointer;
        }
    }
</style>