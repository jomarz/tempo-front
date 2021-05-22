<template>
    <div class="article-modal-info-box">
        <!-- <div class="article-quote" v-html="featuredInfo.quote"></div> -->
        <div class="article-quote">"To send light into the darkness of men's hearts - such is the duty of the artist."</div>
        <div class="article-quote-author">
            - <span v-html="abc" class="quote-author"></span>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        featuredInfo: {
            required: true,
            type: Object
        }
    },
    setup() {
        var abc = "Robert Schumann"
        return { abc }
    }
}
</script>

<style lang="scss" scoped>
.article-modal-info-box {
    width: 100%;
    margin-top: 2px;
    padding: 20px 0 30px;
    background-color: #27648f;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .article-quote, .article-quote-author {
        width: 90%;
        font-family: 'Playfair display';
    }
    .article-quote {
        font-weight: 300;
        font-size: 1rem !important;
        letter-spacing: 0.02rem;
    }
    .article-quote-author {
        font-size: 0.85rem;
        letter-spacing: 0.015rem;        
        font-weight: 300;
    }
}

</style>