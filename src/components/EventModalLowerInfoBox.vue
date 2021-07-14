<template>
    <div class="event-modal-lower-info-box">
        <div class="left-info-box">
            <h1 class="feat-event-title">{{featuredInfo.title}}</h1>
            <count-down :datetime="featuredInfo.datetime" ></count-down>
        </div>
        <div class="right-info-box">
            <feat-info-event-box :featuredInfo="featuredInfo"/>
        </div>
    </div>
</template>

<script>
import CountDown from './CountDown.vue'
import FeatInfoEventBox from './FeatInfoEventBox.vue'

export default {
  components: { CountDown, FeatInfoEventBox },
    props: {
        featuredInfo: {
            required: true,
            type: Object
        }
    },
}
</script>

<style lang="scss" scoped>
.event-modal-lower-info-box {
    width: 100%;
    margin-top: 2px;
    padding: 20px 25px 30px;
    background-color: #27648f;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    .left-info-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: 1.6rem !important;
            text-align: center;
        }
    }
    .right-info-box {
        max-width: 40%;
        margin-left: 20px;
    }
}

</style>