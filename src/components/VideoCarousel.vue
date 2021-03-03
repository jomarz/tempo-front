<template>
    <div class="video-carousel-container">
            <div class="video-carousel-content">
                <div v-for="(videoInfo, index) in videoList" :key="index" class="video-carousel-box">
                    <video-small-box :boxContent="videoInfo" />
                    <div class="mask-youtube" @click="changeVideo(videoInfo)" ></div>
                </div>
            </div>
            <div class="carousel-nav">
                <a href="" @click.prevent="store.videoCarousel.moveUp()"><img src="..\assets\img\icons\Arrows\YellowArrows_top.svg" alt="up"></a>
                <a href="" @click.prevent="store.videoCarousel.moveDown()"><img src="..\assets\img\icons\Arrows\YellowArrows_down.svg" alt="down"></a>
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
        display: flex;
        padding-right: 0;
        justify-content: space-between;
        .video-carousel-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            padding-left: 10px;
            .video-carousel-box {
                margin-bottom: 12px;
                position: relative;
            }
        }
        .carousel-nav {
            display: flex;
            flex-direction: column;
            padding: 0 0 0 20px;
            a {
                line-height: 17px;
            }
            img {
                width: 17px;
                margin-bottom: 18px;
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