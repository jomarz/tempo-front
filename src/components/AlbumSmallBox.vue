<template>
    <div class="album-small-box" @click="openContent(boxContent.permalink, boxContent.id, 0)">
        <div class="thumbnal-container">
            <img :src="boxContent.imgUrl" alt="" class="thumbnail-image">
        </div>
        <div class="album-title">{{boxContent.title}}</div>
        <p class="album-text">{{boxContent.description}}</p>
        <read-more-link contentType="album" :contentPermalink="boxContent.permalink" isEvent="0" :contentId="boxContent.id"/>
    </div>    
</template>

<script>
import ReadMoreLink from './ReadMoreLink.vue'
export default {
  components: { ReadMoreLink },
    props: {
        boxContent: {
            required: true,
            type: Object
        }
    },
    methods: {
        openContent(permalink, id, isEvent) {console.log({permalink, id, isEvent});
            if (isEvent == 1)   this.$router.push('/evento/'+permalink);
            else                this.$router.push('/articulo/'+permalink);
        }
    }
}
</script>

<style lang="scss" scoped>
    .album-small-box {
        width: 151px;
        cursor: pointer;
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
    @media only screen and (max-width: 767px) {
        .album-small-box {
            margin-right: 25px;
        }
    }
</style>