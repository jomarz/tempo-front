<template>
    <div class="related-article-box" :articleInfo="articleInfo">
        <img :src="articleInfo.imgUrl" alt="">
        <h6>{{articleInfo.title}}</h6>
        <p>{{articleInfo.subtitle}}</p>
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
        margin-right: 15px;
        img {
            width: 100%;
            margin-bottom: 8px;
        }
    }
</style>