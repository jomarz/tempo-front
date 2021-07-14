<template>
    <div class="printed-small-box">
        <div class="printed-thumbnail">
            <img :src="boxContent.imgUrl" alt="">
        </div>
        <div class="printed-box-title">{{boxContent.title}}</div>
        <p class="printed-box-text">{{boxContent.description}}</p>
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
    .printed-small-box {
        max-width: 209px;
        padding: 0 5px 0 0;
        .printed-thumbnail img {
            width: 136px;
            height: 192px;
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
    @media only screen and (max-width: 767px) {
        .printed-small-box {
            margin-right: 25px;
            padding: 0;
        }
    }
</style>