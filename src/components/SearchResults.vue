<template>
    <div class="search-results">
        <div class="close-row">
            <img src="..\assets\img\icons\ExitIcon.svg" @click="$emit('close-results')" alt="">
        </div>
        <div class="results-content">
            <div class="results-list">
                <div v-for="result in resultsList" class="search-result" :key="result.id">
                    <a href="" class="result-title" @click.prevent="openContent(result.permalink, result.postType); $emit('close-results'); closeMobileSearchbox();" >{{result.article_title}}</a>
                    <div class="result-subtitle">{{result.article_subtitle}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store/store.js';
export default {
    setup() {
        return { store };
    },
    props: {
        resultsList: { required: true }
    },
    methods: {
        setArticle(id, permalink, postType) {
            var isEvent = 0;
            if(postType=='event')   isEvent = 1;
            store.setArticle(permalink, id, isEvent);
            store.toggleArticle();
            this.$emit('clear-search-input');
        },
        openContent(permalink, postType) {
            var isEvent = 0;
            if(postType=='event')   isEvent = 1;
            if (isEvent == 1)   this.$router.push('/evento/'+permalink);
            else                this.$router.push('/articulo/'+permalink);

            /* store.setArticle(permalink, id, isEvent);
            store.toggleArticle(); */
        },
        closeMobileSearchbox() {
            if(store.showMobileSearchbox.state)   store.toggleMobileSearchbox()
        }
    }
}
</script>

<style lang="scss" scoped>
.search-results {
    background-color: white;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), 6px 6px 20px rgba(0, 0, 0, 0.19);
    .results-content {
        padding: 35px 15px 20px 15px;
    }
    .close-row {
        width: 100%;
        padding: 0 8px 0 0;
        img {
            height: 15px;
            float: right;
            margin-top: 10px;
            cursor: pointer;
        }
    }
    .results-list {
        overflow-y: auto;
        max-height: 70vh;
    }
}
.search-result {
    border-top: 1px dashed #bcbec0;
    padding: 7px 0 8px;
    a.result-title {
        font-size: 0.8rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        line-height: 1.125rem;
        display: block;
        color: #278de2;
    }
    .result-subtitle {
      font-size: 0.75rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 1.125rem;
        color: #808285;
    }
}

</style>