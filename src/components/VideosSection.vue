<template>
    <div class="content-section videos-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNavNoMenu :navTitle="navTitle" :menuItems="menuItems"/>
            </div>
        </div>
        <div class="row main-videos-row">
            <main-video class="col-12 col-md-8 col-lg-9 main-video" :featVideo="featVideo" ></main-video>
            <video-carousel class="col-12 col-md-3 col-lg-3 video-carousel md-up" :videoList="videoList" ></video-carousel>
        </div>
        <horizontal-carousel :contentList="videoFullList" componentName="video-small-box" class="horizontal-carousel-video sm-only"/>    
    </div>
            
</template>

<script>
import store from '../store/store.js';
import MainVideo from './MainVideo.vue';
import SectionNavNoMenu from './SectionNavNoMenu.vue';
import VideoCarousel from './VideoCarousel.vue';
import HorizontalCarousel from './HorizontalCarousel.vue';
export default {
  components: { SectionNavNoMenu, MainVideo, VideoCarousel, HorizontalCarousel },
    setup() 
    {
        const navTitle = "Videos Tempo";
        const videoFullList = [
            {
                src: 'https://www.youtube.com/embed/UL1qpV6YtAE',
                title: 'Bach en Bogotá - Hans Fagius',
                subtitle: ''
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/QIfs5LnU3d8',
                title: 'Dmitry Masleev',
                subtitle: ''
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/lGRwO9Dle6E',
                title: 'Leszek Mozdzer',
                subtitle: ''
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/UQA6ftchgVQ',
                title: 'Emmanuel Ceysson',
                subtitle: ''
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/QBvZvS_TsDU',
                title: 'Entrevista a Emerson Quartet',
                subtitle: ''
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/zI8YFXjY1ZY',
                title: 'Entrevista a Willy Decker',
                subtitle: ''
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/kfNe7AK2VkA',
                title: 'Peter Donohoe',
                subtitle: ''
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/CRcbDMg56yg',
                title: 'Serenade for Strings | Dvořák',
                subtitle: ''
            },
        ];
        store.videoCarousel.setNumPages(videoFullList.length);
        return { navTitle, store, videoFullList };  
    },
    computed: {
        videoList() {
            return store.videoCarousel.getCurrentPageList(this.videoFullList);
        }
    }
}
</script>

<style lang="scss" scoped>
    .videos-section {
        .main-videos-row {
            margin-top: 40px;
            .main-video {
            }
            .video-carousel {
            }
        }
    }
    @media only screen and (max-width: 767px) {
        .videos-section {
            margin: 20px 15px;
        }
    }
</style>