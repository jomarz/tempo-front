<template>
    <a class="more-link" href="" @click.prevent="setArticle(contentPermalink, contentId)">VER MÁS</a>
</template>

<script>
import store from '../store/store.js';

export default {
    setup() {
        return { store };
    },
    props: {
        contentType: {
            required: true,
            type: String
        },
        contentId: {
            required: true,
            type: String
        },
        contentPermalink: {
            required: true,
            type: String
        },
    },
    methods: {
        setArticle(permalink, id) {
            store.setArticle(permalink, id);
            store.toggleArticle();
        }
    }
}
</script>

<style lang="scss" scoped>

</style>