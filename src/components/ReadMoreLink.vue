<template>
    <a class="more-link" href="" @click.prevent="openContent(contentPermalink, contentId, isEvent)">VER MÁS</a>
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
        isEvent: {
            type: Number
        }
    },
    methods: {
        openContent(permalink, id, isEvent) {console.log({permalink, id, isEvent});
            if (isEvent == 1)   this.$router.push('/evento/'+permalink);
            else                this.$router.push('/articulo/'+permalink);

            /* store.setArticle(permalink, id, isEvent);
            store.toggleArticle(); */
        }
    }
}
</script>

<style lang="scss" scoped>

</style>