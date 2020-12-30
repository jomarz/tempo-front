<template>
    <div class="modal-main-display">
        <div class="info-box">
            <feat-info-event v-if="contentType==='event'" :featuredInfo="content" class=""/>
            <feat-info-article v-if="contentType==='article'" :featuredInfo="content"/>
        </div>
        <div class="media-box"></div>
    </div>    
</template>

<script>
import FeatInfoArticle from './FeatInfoArticle.vue'
import FeatInfoEvent from './FeatInfoEvent.vue'
export default {
    components: { FeatInfoEvent, FeatInfoArticle },
    props: {
        contentType: {
            required: true,
            type: String
        },
        content: {
            required: true,
            type: Object
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .modal-main-display {
        width: 100%;
        display: flex;
        .info-box {
            width: 215px;
            height: 298px;
            background-color: #27648f;
        }
        .media-box {
            width: 504px;
            height: 298px;
            background-color: gray;
        }
    }
</style>