<template>
    <div class="news-small-box">
        <div class="news-thumbnail">
            <img src="../assets/img/Pictures/thumbnail2.jpg" alt="">
        </div>
        <div class="news-box-title">Imodipic iissimus</div>
        <p class="news-box-text">Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur</p>
        <a class="more-link" href="#">VER MÁS</a>
    </div>    
</template>

<script>
export default {
    
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