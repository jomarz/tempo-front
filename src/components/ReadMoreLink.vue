<template>
    <a class="more-link" href="" @click.prevent="setArticle(contentName)">VER MÁS</a>
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
        contentName: {
            required: true,
            type: String
        },
    },
    methods: {
        setArticle(name) {
            store.setArticle(name);
            store.toggleArticle();
        }
    }
}
</script>

<style lang="scss" scoped>

</style>