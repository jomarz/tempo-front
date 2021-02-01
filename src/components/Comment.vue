<template>
    <div class="comment">
        <div class="comment-name">{{comment.comment_author_name}}</div>
        <div class="comment-text">{{comment.comment_text}}</div>
        <div class="comment-actions">
            <div class="answer-link">RESPONDER</div>
            <img src="..\assets\img\icons\ThumbsUpIcon.svg" alt="" class="comment-action-icon">
            <div class="comment-likes">{{comment.comment_likes}}</div>
            <img src="..\assets\img\icons\ThumbsDownIcon.svg" alt="" class="comment-action-icon">
            <div class="comment-dislikes">{{comment.comment_dislikes}}</div>
            <div class="time-since-comment">Hace 1 hora</div>
        </div>
        <div v-if="comment.hasChildren" class="replies" >
            <template v-for="reply in comment.replies" :key="reply.comment_id" >
                <div class="reply">
                    <Comment :comment="reply" />
                    <div class="separator"></div>
                </div>
            </template>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        comment: {required: true}
    },
    name: 'Comment',
    setup(props) {
        console.log(props.comment);
    },
}
</script>

<style lang="scss" scoped>
    .comment {
        .comment-name {
            font-size: 0.85rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
        }
        .comment-text {
            font-size: 0.85rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
        }
        .comment-actions {
            display: flex;
            align-items: center;
            padding: 10px 0 5px;
            font-size: 0.7rem;
            line-height: 0.7rem;
            .answer-link {
                color: #3F89C9;
                font-weight: 700;
                text-decoration: underline;
                margin-right: 20px;
                font-size: 0.7rem;
                line-height: 0.70rem;
                letter-spacing: 0.02rem;
            }
            .answer-link:hover, .comment-action-icon:hover {
                cursor: pointer;
            }
            .comment-action-icon {
                height: 1rem;
                margin: 0 10px 0 35px;
            }
            .comment-likes, .comment-dislikes {
                font-weight: 400;
            }
            .time-since-comment {
                font-weight: 700;
                margin-left: auto;
            }
        }
        .separator {
            width: 100%;
            margin: 20px 0;
            border-top: 1px solid #bcbec0;
        }
        .replies {
            margin: 20px 0 0 50px;
        }
        .reply:last-child .separator {
            display: none;
        }
    }
</style>