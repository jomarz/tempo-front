<template>
    <div class="article-icons">
        <div class="article-views article-icons-element">
            <img src="..\assets\img\icons\ViewsIcon.svg" alt="" class="article-icon">
            <div class="article-icons-count">20</div>
        </div>
        <div class="article-likes article-icons-element">
            <img src="..\assets\img\icons\LikesIcon.svg" alt="" class="article-icon clickable" @click="$emit('like-article')">
            <div class="article-icons-count">18</div>
        </div>
        <div class="article-comment-counter article-icons-element">
            <img src="..\assets\img\icons\ComentariosIcon.svg" alt="" class="article-icon clickable" @click="$emit('toggle-article-comments')" >
            <div class="article-icons-count">103</div>
        </div>
        <div class="article-share article-icons-element">
            <img src="..\assets\img\icons\ShareIcon.svg" alt="" class="article-icon clickable" @click="$emit('share-article')" >
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .article-icons {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0 30px;
        .article-icons-element {
            margin-right: 20px;
            .article-icons-count {
                display: inline;
                margin: 0 10px;
                font-size: 0.75rem;
            }
            .article-icon {
                height: 1rem;
            }
            .article-icon.clickable:hover {
                cursor: pointer;
            }
        }
    }
</style>