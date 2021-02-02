<template>
    <div class="comment-respond">
        <div class="new-comment-fields">
            <input type="text" class="new-comment-author" placeholder="Tu nombre" v-model="commentAuthor" />
            <textarea class="new-comment-input" type="text" placeholder="Escribe tu comentario ..." v-model="commentText" />
        </div>
        <img src="..\assets\img\icons\EnviarIcon.svg" alt="" class="send-icon" @click="sendNewComment()">
    </div>    
</template>

<script>
import NewCommentAPI from '../classes/NewCommentAPI';
import store from '../store/store.js';
export default {
    props: {
        parentCommentId: {}
    },
    setup() {
        const newCommentAPI = new NewCommentAPI();
        return { newCommentAPI };
    },
    methods: {
        sendNewComment()
        {
            let parentId;
            if(this.parentCommentId == undefined)  parentId = null;
            else    parentId = this.parentCommentId;
            
            this.newCommentAPI.sendNewComment(store.articleData.isEvent, store.articleData.id, this.commentAuthor, this.commentText, parentId, (response) => console.log(response));
        }
    }
}
</script>

<style lang="scss" scoped>
    .comment-respond {
        display: flex;
        align-items: flex-end;
        .new-comment-fields {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .new-comment-input, .new-comment-author {
            height: 2rem;
            border: 1px solid #d1d3d4;
            border-radius: 5px;
            margin-right: 5px;
            padding: 7px 15px;
            font-size: 0.8rem;
        }
        .new-comment-author {
            margin-bottom: 5px;
        }
        .send-icon {
            height: 1.2rem;
            margin-bottom: 5px;
        }
        .send-icon:hover {
            cursor: pointer;
        }
    }
</style>