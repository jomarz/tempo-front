<template>
    <div class="printed-small-box">
        <div class="printed-thumbnail">
            <img :src="newsElement.imgUrl" alt="">
        </div>
        <div class="printed-box-title">{{newsElement.title}}</div>
        <p class="printed-box-text">{{newsElement.text}}</p>
        <a class="more-link" href="#">VER MÁS</a>
    </div>    
</template>

<script>
export default {
    props: {
        printedElement: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .printed-small-box {
        width: 209px;
        .printed-thumbnail img {
            width: 106px;
            height: 152px;
            object-fit: cover;
        }
        .printed-box-title {
            font-size: 0.65rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            padding-top: 8ypx;
        }
        p.printed-box-text {
            font-size: 0.65rem !important;
            line-height: 0.77rem;
            padding-top: 3px;
            margin-bottom: 7px;
            max-height: 1.54rem;
            overflow: hidden;
        }
    }
</style>