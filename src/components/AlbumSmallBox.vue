<template>
    <div class="album-small-box">
        <div class="thumbnal-container">
            <img :src="album.imgUrl" alt="" class="thumbnail-image">
        </div>
        <div class="album-title">{{album.title}}</div>
        <p class="album-text">{{album.text}}</p>
        <read-more-link contentType="album" :contentName="album.title" :contentId="album.id"/>
    </div>    
</template>

<script>
import ReadMoreLink from './ReadMoreLink.vue'
export default {
  components: { ReadMoreLink },
    props: {
        album: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .album-small-box {
        width: 151px;
        .thumbnal-container {
            border: 1px solid #d1d3d4;
            padding: 7px;
        }
        img.thumbnail-image {
            width: 135px;
            height: 135px;
            object-fit: cover;
        }
        .album-title {
            font-size: 0.65rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            padding-top: 8px;
        }
        p.album-text {
            font-size: 0.65rem !important;
            line-height: 0.77rem;
            padding-top: 3px;
            margin-bottom: 7px;
            max-height: 2.31rem;
            overflow: hidden;
        }
    }
</style>