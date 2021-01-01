<template>
    <div class="related-articles">
        <related-article-box v-for="articleInfo in relatedArticles" :articleInfo="articleInfo" :key="articleInfo.id" />
    </div>
</template>

<script>
import RelatedArticleBox from "./RelatedArticleBox.vue"

export default {
    props : {
        relatedArticles: { required: true }
    },
    components: { RelatedArticleBox }
    
}
</script>

<style lang="scss" scoped>
    .related-articles {
        display: flex;
    }
</style>