<template>
    <div class="printed-small-box">
        <div class="printed-thumbnail">
            <img :src="printedElement.imgUrl" alt="">
        </div>
        <div class="printed-box-title">{{printedElement.title}}</div>
        <p class="printed-box-text">{{printedElement.text}}</p>
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
            width: 126px;
            height: 172px;
            object-fit: cover;
        }
        .printed-box-title {
            font-size: 0.65rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            padding-top: 8px;
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