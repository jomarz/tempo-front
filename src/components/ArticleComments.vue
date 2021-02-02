<template>
    <div class="article-comments">
        <div class="separator"></div>
        <div class="comment-nav-row">
            <img src="..\assets\img\icons\BlueArrowDownIcon.svg" alt="" class="close-comments-icon" @click="$emit('toggle-article-comments')">
        </div>
        <template v-for="comment in comments" :key="comment.comment_id" >
            <Comment :comment="comment" />
            <div class="separator"></div>
        </template>
        <comment-respond />
    </div>
</template>

<script>
import Comment from './Comment.vue'
import CommentRespond from './CommentRespond.vue';
export default {
    components: { Comment, CommentRespond },
    props: {
        comments: {type: Array}
    },
    setup(props) {
        console.log(props.comments);
    },
    
}
</script>

<style lang="scss" scoped>
    .article-comments {
        margin: 20px 0 55px;
        .comment-nav-row {
            display: flex;
            justify-content: flex-end;
            margin: 0 0 10px;
            .close-comments-icon {
                height: 1rem;
            }
            .close-comments-icon:hover {
                cursor: pointer;
            }
        }
        .separator {
            width: 100%;
            margin: 20px 0;
            border-top: 1px solid #bcbec0;
        }
    }
</style>