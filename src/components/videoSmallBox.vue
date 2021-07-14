<template>
    <div class="video-small-box">
        <div class="video-container">
            <div class="video-wrapper">
                <iframe :src="boxContent.src" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-box-title">
            {{boxContent.title}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        boxContent: {required: true}
    }
}
</script>

<style lang="scss" scoped>
    .video-small-box {
        max-width: 221px;
        .video-container {
            width: 221px;
            height: 139px;
            overflow: hidden;
            position: relative;
            padding: 6px;
            border: 1px solid #d1d3d4;
        }
        .video-wrapper {
            overflow: hidden;
            position: relative;
            width: 209px;
            height: 127px;
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
        .video-box-title {
            font-size: 0.9rem !important;
            line-height: 1.1rem;
            font-family: 'Playfair display';
            font-weight: 400;
            margin: 6px 0 15px;
        }
    }
    .horizontal-carousel-video {
        .video-small-box {
            margin-right: 20px;
        }
    }
    @media only screen and (min-width: 767px) and (max-width: 1199px) {
        .video-small-box {
            .video-container {
            }
        }
    }
</style>