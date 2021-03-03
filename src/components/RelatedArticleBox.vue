<template>
    <div class="related-article-box" :articleInfo="articleInfo" @click="openContent(articleInfo.permalink, articleInfo.postType)">
        <img :src="articleInfo.imgUrl" alt="">
        <div class="related-title">{{articleInfo.article_title}}</div>
        <p class="related-description">{{articleInfo.article_subtitle}}</p>
    </div>    
</template>

<script>
import store from '../store/store'
export default {
    props: {
        articleInfo: { required: true }
    },
    methods: {
        openContent(permalink, postType) {
            
            var isEvent = 0;
            if(postType=='event')   isEvent = 1;
            store.setArticlePermalink(permalink, isEvent);
            if (isEvent == 1)   this.$router.push('/evento/'+permalink);
            else                this.$router.push('/articulo/'+permalink);

        }
    }
}
</script>

<style lang="scss" scoped>
    .related-article-box {
        width: 157px;
        cursor: pointer;
        img {
            width: 100%;
            height: 89px;
            object-fit: cover;
            margin-bottom: 8px;
        }
        .related-title {
            font-size: 0.9rem;
            line-height: 1.15rem;
            margin: 0 0 5px;
        }
        .related-description {
            line-height: normal;
        }
    }
</style>