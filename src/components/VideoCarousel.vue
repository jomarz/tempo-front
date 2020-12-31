<template>
    <div class="video-carousel-container container">
        <div class="row">
            <div class="col-10 video-carousel-content">
                <div v-for="(videoInfo, index) in videoList" :key="index" class="video-carousel-boxes">
                    <video-small-box :videoInfo="videoInfo" />
                </div>
            </div>
            <div class="col-2 vdeo-carousel-nav"></div>
        </div>
    </div>
</template>

<script>
import videoSmallBox from './videoSmallBox.vue'
export default {
  components: { videoSmallBox },
    props: {
        videoList: { required: true }
    }
}
</script>

<style lang="scss" scoped>
    .video-carousel-container {
        //padding: 0;
        .video-carousel-content {
        }
        .video-carousel-nav {
            background-color: black;
        }
    }
</style>