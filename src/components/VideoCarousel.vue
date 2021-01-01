<template>
    <div class="video-carousel-container container">
        <div class="row">
            <div class="col-10 video-carousel-content">
                <div v-for="(videoInfo, index) in videoList" :key="index" class="video-carousel-box">
                    <video-small-box :videoInfo="videoInfo" />
                </div>
            </div>
            <div class="col-2 vdeo-carousel-nav">
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
    }
}
</script>

<style lang="scss" scoped>
    .video-carousel-container {
        //padding: 0;
        .video-carousel-content {
            .video-carousel-box {
                margin-bottom: 12px;
            }
        }
        .video-carousel-nav {
            background-color: black;
        }
    }
</style>