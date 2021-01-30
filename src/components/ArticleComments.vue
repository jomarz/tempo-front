<template>
    <div class="article-comments">
        <div class="separator"></div>
        <comment />
        <div class="separator"></div>
        <comment />
        <div class="separator"></div>
        <comment />
    </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: { Comment },
    
}
</script>

<style lang="scss" scoped>
    .article-comments {
        margin: 0 0 25px;
        .separator {
            width: 100%;
            margin: 20px 0;
            border-top: 1px solid #d1d3d4;
        }
    }
</style>