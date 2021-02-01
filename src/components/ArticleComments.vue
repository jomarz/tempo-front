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
        <div class="comment-add-section">
            <textarea class="new-comment-input" type="text" placeholder="Escribe tu comentario ..." />
            <img src="..\assets\img\icons\EnviarIcon.svg" alt="" class="send-icon">
        </div>
    </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
    components: { Comment },
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
        .comment-add-section {
            display: flex;
            align-items: center;
            .new-comment-input {
                flex-grow: 1;
                height: 2rem;
                border: 1px solid #d1d3d4;
                border-radius: 5px;
                margin-right: 5px;
                padding: 7px 15px;
                font-size: 0.8rem;
            }
            .send-icon {
                height: 1.2rem;
            }
        }
        .separator {
            width: 100%;
            margin: 20px 0;
            border-top: 1px solid #bcbec0;
        }
    }
</style>