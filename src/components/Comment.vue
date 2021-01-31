<template>
    <div class="comment">
        <div class="comment-name">Akvjcbsnsdk</div>
        <div class="comment-text">Pit, cuptatque et fuga. Et millam rerunto volupta nulparum et ent pe volorumqui utAtur aborume turiass equiassint.</div>
        <div class="comment-actions">
            <div class="answer-link">RESPONDER</div>
            <img src="..\assets\img\icons\ThumbsUpIcon.svg" alt="" class="comment-action-icon">
            <div class="comment-likes">5</div>
            <img src="..\assets\img\icons\ThumbsDownIcon.svg" alt="" class="comment-action-icon">
            <div class="comment-dislikes">0</div>
            <div class="time-since-comment">Hace 1 hora</div>
        </div>
    </div>    
</template>

<script>
export default {
    
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
            padding: 15px 0 5px;
            font-size: 0.75rem;
            line-height: 0.75rem;
            .answer-link {
                color: #3F89C9;
                font-weight: 400;
                text-decoration: underline;
                margin-right: 20px;
                font-size: 0.80rem;
                line-height: 0.80rem;
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
                font-weight: 400;
                margin-left: auto;
            }
        }
    }
</style>