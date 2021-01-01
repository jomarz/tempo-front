<template>
    <div class="related-article-box" :articleInfo="articleInfo">
        {{articleInfo.title}}
        {{articleInfo.subtitle}}    
    </div>    
</template>

<script>
export default {
    props: {
        articleInfo: { required: true }
    }
}
</script>

<style lang="scss" scoped>

</style>