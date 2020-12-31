<template>
    <div class="video-small-box">
        <div class="video-container">
            <iframe :src="videoInfo.src" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        videoInfo: {required: true}
    }
}
</script>

<style lang="scss" scoped>
    .video-small-box {
        width: 209px;
        height: 127px;
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
    }
</style>