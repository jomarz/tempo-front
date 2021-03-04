<template>
    <div class="main-video-container">
            <div class="main-video">
                <div class="video-container">
                    <iframe :src="store.featVideo.src" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        .video-container {
            overflow: hidden;
            position: relative;
        }

        .video-container::after {
            padding-top: 56.25%;
            display: block;
            content: '';
        }
        .main-video {
            max-width: 791px;
            padding: 8px;
            border: 1px solid #d1d3d4;
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
    @media only screen and (min-width: 768px) {
        .main-video-container {
            margin: 0 10px 0 20px;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1199px) {
        .main-video-container {
            justify-content: start;
        }
    }
    @media only screen and (max-width: 767px) {
        .main-video-container {
            margin: 5px 0px 20px;
            padding: 0 15px;
            .main-video-row {
                margin: 0;
                padding: 8px;
                border: 1px solid #d1d3d4;
                .main-video {
                    padding: 0;
                }
            }
            .main-video-title {
                padding-top: 5px;
            }
        }
    }
</style>