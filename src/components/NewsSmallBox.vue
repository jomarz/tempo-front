<template>
    <div class="news-small-box">
        <div class="news-thumbnail">
            <img :src="newsElement.imgUrl" alt="">
        </div>
        <div class="news-box-title">{{newsElement.title}}</div>
        <p class="news-box-text">{{newsElement.text}}</p>
        <a class="more-link" href="#">VER MÁS</a>
    </div>    
</template>

<script>
export default {
    props: {
        newsElement: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .news-small-box {
        width: 209px;
        .news-thumbnail img {
            width: 209px;
            height: 113px;
            object-fit: cover;
        }
        .news-box-title {
            font-size: 0.65rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            padding-top: 7px;
        }
        p.news-box-text {
            font-size: 0.65rem !important;
            line-height: 0.77rem;
            padding-top: 3px;
            margin-bottom: 7px;
            max-height: 1.54rem;
            overflow: hidden;
        }
    }
</style>