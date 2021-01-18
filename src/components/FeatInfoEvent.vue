<template>
    <div class="feat-info-event">
        <h1 class="feat-event-title">{{featuredInfo.title}}</h1>
        <feat-info-event-box :featuredInfo="featuredInfo"/>
    </div>
</template>

<script>
import FeatInfoEventBox from './FeatInfoEventBox.vue'
export default {
  components: { FeatInfoEventBox },
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
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

</style>