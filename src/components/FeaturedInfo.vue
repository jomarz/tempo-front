<template>
    <div class="featured-info">
        <feat-info-event v-if="featuredType==='event'" :featuredInfo="featuredInfo" class="home-main"/>
        <feat-info-article v-if="featuredType==='article'" :featuredInfo="featuredInfo"/>
    </div>
</template>

<script>
import FeatInfoArticle from './FeatInfoArticle.vue'
import FeatInfoEvent from './FeatInfoEvent.vue'
export default {
  components: { FeatInfoEvent, FeatInfoArticle },
    props: {
        featuredType: {
            required: true,
            type: String
        },
        featuredInfo: {
            required: true,
            type: Object
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .featured-info {
        padding: 70px 20px 40px 20px;
    }
</style>