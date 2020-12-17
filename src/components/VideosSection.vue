<template>
    <div class="content-section videos-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNavNoMenu :navTitle="navTitle" :menuItems="menuItems"/>
            </div>
        </div>
        <div class="row main-videos-row">
            <main-video class="col-12 col-md-8 col-lg-9 main-video"></main-video>
            <video-carousel class="col-12 col-md-3 col-lg-3 video-carousel"></video-carousel>
        </div>
    </div>    
</template>

<script>
import MainVideo from './MainVideo.vue';
import SectionNavNoMenu from './SectionNavNoMenu.vue';
import VideoCarousel from './VideoCarousel.vue';
export default {
  components: { SectionNavNoMenu, MainVideo, VideoCarousel },
    setup() 
    {
        const navTitle = "Videos Tempo";
        return { navTitle };  
    }  
}
</script>

<style lang="scss" scoped>
    .videos-section {
        .main-videos-row {
            margin-top: 40px;
            height: 300px;
            .main-video {
                background-color: gray;
            }
            .video-carousel {
                background-color: wheat;
            }
        }
    }
</style>