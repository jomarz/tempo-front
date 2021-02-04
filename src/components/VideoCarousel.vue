<template>
    <div class="video-carousel-container container">
        <div class="row">
            <div class="col-10 video-carousel-content">
                <div v-for="(videoInfo, index) in videoList" :key="index" class="video-carousel-box">
                    <video-small-box :boxContent="videoInfo" />
                    <div class="mask-youtube" @click="changeVideo(videoInfo)" ></div>
                </div>
            </div>
            <div class="col-2 carousel-nav">
                <a href="" @click.prevent="store.videoCarousel.moveUp()"><img src="..\assets\img\icons\Arrows\YellowArrows_top.svg" alt="up"></a>
                <a href="" @click.prevent="store.videoCarousel.moveDown()"><img src="..\assets\img\icons\Arrows\YellowArrows_down.svg" alt="down"></a>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store/store'
import videoSmallBox from './videoSmallBox.vue'
export default {
  components: { videoSmallBox },
    props: {
        videoList: { required: true }
    },
    setup() {
        return { store }
    },
    methods: {
        changeVideo(videoInfo) {
            store.setfeatVideo(videoInfo);
        }
    }
}
</script>

<style lang="scss" scoped>
    .video-carousel-container {
        //padding: 0;
        .video-carousel-content {
            overflow: hidden;
            .video-carousel-box {
                margin-bottom: 12px;
                position: relative;
            }
        }
        .video-carousel-nav {
            background-color: black;
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