<template>
    <div class="related-articles">
        <h5 class="related-articles-title">También podría interesarle</h5>
        <div class="related-articles-boxes">
            <related-article-box v-for="articleInfo in relatedArticles" :articleInfo="articleInfo" :key="articleInfo.id" />
        </div>
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
        flex-direction: column;
        .related-articles-title {
            margin: 35px 0 25px;
        }
        .related-articles-boxes {
            display: flex;
        }
    }
</style>