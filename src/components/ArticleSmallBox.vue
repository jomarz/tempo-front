<template>
    <div class="article-small-box ">
        <div class="">
            <div class="thumbnail">
                <img class="thumbnail-image" src="../assets/img/Pictures/thumbnail1.png" alt="">
            </div>
            <div class="box_info-container">
                <div class="box-info container">
                    <div class="row box-title-row no-gutters">
                        <div class="box-info-left col-1"></div>
                        <div class="box-info-right col-11 box-title">
                            <h6>{{ boxContent.title }}</h6>
                            <span class="box-subtitle">{{ boxContent.subtitle }}</span>
                        </div>
                    </div>
                    <div class="row box-content-row no-gutters">
                        <div class="box-info-left col-1 box-day"></div>
                        <div class="box-info-right col-11 box-content">
                            <p class="box-text">{{ boxContent.text }}</p>
                            <a class="more-link" href="#">VER MÁS</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    .article-small-box {
        width: 392px;
        display: inline-block;
        margin-bottom: 40px;
        .thumbnail {
            width: 196px;
            float: left;
        }
        .thumbnail img {
            height: 147px;
            width: 196px;
            object-fit: cover;
        }
        .box_info-container {
            width: 196px;
            height: 147px;
            float: left;
            background-color: #f1f2f2;
        }
        .box-info {
            padding: 10px;
        }
        .box-info-left {
            padding-left: 0px;
            padding-right: 0px;
        }
        .box-info-right {
            padding-left: 6px;
        }
        .box-title-row {
            border-bottom: 2px solid #fff;
            height: 42px;
        }
        .box-content-row {
            height: 85px;
        }
        .box-title-row, .box-content-row {
            margin-left: 0px;
            margin-right: 0px;
        }
        .box-content {
            height: 100%;
        }
        .box-content, .box-title {
            border-left: 2px solid #fff;
        }
        .box-content {
            padding-right: 2px;
        }
        .box-title {
            padding-top: 1px;
        }
        .box-subtitle {
            font-size: 0.65rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            display: block;
            padding-top: 2px;
        }
        .box-text {
            height: 100%;
            overflow: hidden;
        }
        p.box-text {
                font-size: 0.65rem !important;
                line-height: 0.77rem;
                padding-top: 5px;
        }
    }
</style>