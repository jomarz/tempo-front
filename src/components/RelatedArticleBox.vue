<template>
    <div class="related-article-box" :articleInfo="articleInfo">
        <img :src="articleInfo.imgUrl" alt="">
        <div class="related_title">{{articleInfo.article_title}}</div>
        <p>{{articleInfo.article_subtitle}}</p>
    </div>    
</template>

<script>
export default {
    props: {
        articleInfo: { required: true }
    }
}
</script>

<style lang="scss" scoped>
    .related-article-box {
        width: 157px;
        img {
            width: 100%;
            height: 89px;
            object-fit: cover;
            margin-bottom: 8px;
        }
        .related_title {
            font-size: 0.9rem;
            margin: 0 0 5px;
        }
    }
</style>