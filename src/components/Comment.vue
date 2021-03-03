<template>
    <div class="comment">
        <div class="comment-name">{{comment.comment_author_name}}</div>
        <div class="comment-text">{{comment.comment_text}}</div>
        <div class="comment-actions">
            <div class="answer-link" @click="showCommentResponseInput()" >RESPONDER</div>
            <img src="..\assets\img\icons\ThumbsUpIcon.svg" @click="likeComment()" alt="" class="comment-action-icon" :class="{clickable: !commentHasReaction}" >
            <div class="comment-likes">{{comment.comment_likes}}</div>
            <img src="..\assets\img\icons\ThumbsDownIcon.svg" @click="dislikeComment()" alt="" class="comment-action-icon" :class="{clickable: !commentHasReaction}" >
            <div class="comment-dislikes">{{comment.comment_dislikes}}</div>
            <div class="time-since-comment">Hace {{timeSinceCommentString}}</div>
        </div>
        <comment-respond v-if="showResponseInput" class="individual-comment-response" :parentCommentId="comment.comment_id" @update-comments="$emit('update-comments')" @hide-response-input="hideResponseInput()" />
        <div v-if="comment.hasChildren" class="replies" >
            <template v-for="reply in comment.replies" :key="reply.comment_id" >
                <div class="reply">
                    <Comment :comment="reply" @update-comments="$emit('update-comments')" />
                    <div class="separator"></div>
                </div>
            </template>
        </div>
    </div>    
</template>

<script>
import { ref } from 'vue';
import store from '../store/store';
import EventDatetime from '../classes/EventDatetime';
import CommentReactionAPI from '../classes/CommentReactionAPI';
import CommentRespond from './CommentRespond.vue';
export default {
  components: { CommentRespond },
    props: {
        comment: {
            required: true,
            type: Object
            }
    },
    name: 'Comment',
    setup() {
        var showResponseInput = ref(false);
        var commentHasReaction = ref(false);

        return { showResponseInput, commentHasReaction }
    },
    computed: {
        timeSinceCommentString()
        {
            let commentDatetime = new EventDatetime(this.comment.comment_datetime);console.log(this.comment.comment_datetime);
            var timeSinceComment = commentDatetime.getDistanceToEvent();console.log(timeSinceComment);
            if(timeSinceComment.days > 0) {
                if(timeSinceComment.days == 1)      return '1 día';
                else                                return timeSinceComment.days+' días';
            } else if(timeSinceComment.hours > 0) {
                if(timeSinceComment.hours == 1)     return '1 hora';
                else                                return timeSinceComment.hours+' horas';
            } else {
                if(timeSinceComment.minutes == 1)   return '1 minuto';
                else                                return timeSinceComment.minutes+' minutos';
            }
        }
    },
    methods: {
        showCommentResponseInput()
        {
            this.showResponseInput = true;
        },
        hideResponseInput()
        {
            this.showResponseInput = false;
        },
        likeComment()
        {
            var commentReactionAPI = new CommentReactionAPI();
            commentReactionAPI.likeComment(this.comment.comment_id, store.articleData.isEvent, (response) => {
                if(response.response_code == 100) {
                    this.$emit('update-comments');
                    this.commentHasReaction = true;
                }
            });
        },
        dislikeComment()
        {
            var commentReactionAPI = new CommentReactionAPI();
            commentReactionAPI.dislikeComment(this.comment.comment_id, store.articleData.isEvent, (response) =>  {
                if(response.response_code == 100) {
                    this.$emit('update-comments');
                    this.commentHasReaction = true;
                }
            });
        }
    }
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
            .answer-link:hover, .comment-action-icon.clickable:hover {
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
        .individual-comment-response {
            margin: 15px 0;
        }
        .separator {
            width: 100%;
            margin: 20px 0;
            border-top: 1px solid #bcbec0;
        }
        .replies {
            margin: 20px 0 0 50px;
            .answer-link {
                display: none;
            }
            .comment-action-icon:first-of-type {
                margin-left: 0px;
            }
        }
        .reply:last-child .separator {
            display: none;
        }
    }
</style>