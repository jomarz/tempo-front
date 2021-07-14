<template>
    <div class="article-cta">
        <div class="subscribe-button">
            <button class="receive-button article-cta-button" @click="store.toggleSubscribe()">SUSCRÍBETE</button>
        </div>
        <div class="article-cta-text">
            Para recibir nuestro Newsletter e información de los eventos musicales más importantes del momento.
        </div>
    </div>
</template>

<script>
import store from '../store/store.js';

export default {
    setup() {
        return { store };
    }    
}
</script>

<style lang="scss" scoped>
    .article-cta {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px 10px;
        background-color: #f3f3f4;
        .receive-button.article-cta-button {
            font-family: 'Playfair display';
            font-size: 0.75rem;
            padding: 5px 10px;
            margin-left: 0;
            width: 140px;
        }
        .article-cta-text {
        font-size: 0.7rem !important;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        max-width: 520px;
        }
    }
    @media only screen and (max-width: 767px) {
        .article-cta {
            flex-direction: column;
            padding: 20px 10px;
            .article-cta-text {
                text-align: center;
                padding-top: 15px;
            }
        }
    }
</style>