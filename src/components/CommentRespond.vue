<template>
    <div class="comment-respond">
        <textarea class="new-comment-input" type="text" placeholder="Escribe tu comentario ..." />
        <img src="..\assets\img\icons\EnviarIcon.svg" alt="" class="send-icon">
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .comment-respond {
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
</style>