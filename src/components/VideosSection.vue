<template>
    <div class="content-section videos-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNavNoMenu :navTitle="navTitle" :menuItems="menuItems"/>
            </div>
        </div>
        <div class="row main-videos-row">
            <main-video class="col-12 col-md-8 col-lg-9 main-video" :featVideo="featVideo" ></main-video>
            <video-carousel class="col-12 col-md-3 col-lg-3 video-carousel" :videoList="videoList" ></video-carousel>
        </div>
    </div>    
</template>

<script>
import store from '../store/store.js';
import {  }from 'vue';
import MainVideo from './MainVideo.vue';
import SectionNavNoMenu from './SectionNavNoMenu.vue';
import VideoCarousel from './VideoCarousel.vue';
export default {
  components: { SectionNavNoMenu, MainVideo, VideoCarousel },
    setup() 
    {
        const navTitle = "Videos Tempo";
        const videoFullList = [
            {
                src: 'https://www.youtube-nocookie.com/embed/YavoiqULwLc',
                title: 'Kaleidoscope Chamber Orchestra'
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/4MPuoOj5TIw',
                title: 'Gustav Mahler'
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/uWnKMzAedK4',
                title: 'Franz Schubert D 759'
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/CRcbDMg56yg',
                title: 'Serenade for Strings | Dvořák'
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/YavoiqULwLc',
                title: 'Kaleidoscope Chamber Orchestra'
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/4MPuoOj5TIw',
                title: 'Gustav Mahler'
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/uWnKMzAedK4',
                title: 'Franz Schubert D 759'
            },
            {
                src: 'https://www.youtube-nocookie.com/embed/CRcbDMg56yg',
                title: 'Serenade for Strings | Dvořák'
            },
        ];
        store.videoCarousel.setNumPages(Math.ceil(videoFullList.length/store.videoCarousel.elemsPerPage.value));
        console.log(store.videoCarousel.currentPage.value);
        console.log(store.videoCarousel.numPages);
        console.log(store.videoCarousel.elemsPerPage.value);
        //const videoList = videoFullList.slice((store.videoCarousel.currentPage-1)*store.videoCarousel.elemsPerPage,store.videoCarousel.currentPage*store.videoCarousel.elemsPerPage);
        return { navTitle, store, videoFullList };  
    },
    computed: {
        videoList() {
            console.log(this.videoFullList.length);
            return this.videoFullList.slice((store.videoCarousel.currentPage.value-1)*store.videoCarousel.elemsPerPage.value,store.videoCarousel.currentPage.value*store.videoCarousel.elemsPerPage.value);
        }
    },
    methods: {
        getVideoList() {
            return this.videoFullList.slice((store.videoCarousel.currentPage-1)*store.videoCarousel.elemsPerPage,store.videoCarousel.currentPage*store.videoCarousel.elemsPerPage);
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
</style>