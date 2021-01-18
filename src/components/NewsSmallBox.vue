<template>
    <div class="news-small-box">
        <div class="news-thumbnail">
            <img :src="boxContent.imgUrl" alt="">
        </div>
        <div class="news-box-title">{{boxContent.title}}</div>
        <p class="news-box-text">{{boxContent.description}}</p>
        <a class="more-link" href="#">VER MÁS</a>
    </div>    
</template>

<script>
export default {
    props: {
        boxContent: {
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
            padding-top: 8px;
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
    /* Mobile rules */
    @media only screen and (max-width: 767px) {
        .news-small-box {
            width: 180px;
            margin-right: 25px;;
            .news-thumbnail img {
                width: 180px;
                height: 113px;
                object-fit: cover;
            }
            .news-box-title {
                font-size: 0.65rem !important;
                font-family: 'Roboto', sans-serif;
                font-weight: 700;
                padding-top: 8px;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            p.news-box-text {
                font-size: 0.65rem !important;
                line-height: 0.77rem;
                padding-top: 3px;
                margin-bottom: 7px;
                max-height: 1.54rem;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
</style>