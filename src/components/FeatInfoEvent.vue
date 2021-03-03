<template>
    <div class="feat-info-event">
        <h1 class="feat-event-title">{{featuredInfo.title}}</h1>
        <feat-info-event-box :featuredInfo="featuredInfo"/>
        <count-down :datetime="featuredInfo.datetime" ></count-down>
    </div>
</template>

<script>
import FeatInfoEventBox from './FeatInfoEventBox.vue'
import CountDown from './CountDown.vue';
export default {
  components: { FeatInfoEventBox, CountDown },
    props: {
        featuredInfo: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .feat-info-event {
        max-width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1, h2, h4 {
            color: white;
        }
        .feat-event-title {
            width: min-content;
            max-width: 90%;
            text-align: center;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
    .home-main.feat-info-event {
        .feat-event-title {
            max-width: 300px;
        }
    }
    .article-modal-info.feat-info-event {
        .feat-event-title {
            max-width: 190px;
            font-size: 1.35rem !important;
            line-height: normal;
        }
    }
    @media only screen and (min-width: 768px) {
        .feat-info-event .feat-event-title {
            font-size: 1.8rem !important;
            width: 85%;
        }
    }

</style>