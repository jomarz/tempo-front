<template>
    <div class="main-video-container container">
        <div class="row main-video-row">
            <div class="col main-video">
                <div class="video-container">
                    <iframe :src="store.featVideo.src" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>                
            </div>
        </div>
        <div class="main-video-title">
            <h3>{{store.featVideo.title}}</h3>
        </div>
    </div>
</template>

<script>
import store from '../store/store';
export default {
        props: {
            featVideo: {
                required: true
            }
        },
        setup() {
            return { store };
        }
}
</script>

<style lang="scss" scoped>
    .main-video-container {
        padding: 0;
        .video-container {
            overflow: hidden;
            position: relative;
            width:100%;
        }

        .video-container::after {
            padding-top: 56.25%;
            display: block;
            content: '';
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .main-video-title {
            padding: 15px 0;
        }
    }
    @media only screen and (max-width: 767px) {
        .main-video-container {
            .main-video-row {
                margin: 15px;
                padding: 8px;
                border: 1px solid black;
                .main-video {
                    padding: 0;
                }
            }
        }
    }
</style>