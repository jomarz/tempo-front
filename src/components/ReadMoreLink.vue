<template>
    <a class="more-link" href="" @click.prevent="openContent(contentPermalink, contentId, isEvent)">VER MÁS <img class="read-more-arrow" src="..\assets\img\icons\Arrows\BlueArrows_right.svg" alt=""><img class="read-more-arrow featured-arrow" src="..\assets\img\icons\Arrows\YellowArrows_right.svg" alt=""></a>
    
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
    .read-more-arrow {
        height: 0.5rem;
        margin: 0 0 2px 2px;
    }
    .featured-arrow {
        display: none;
    }
    .featured-info .featured-arrow {
        display: inline;
    }
    .featured-info .read-more-arrow:not(.featured-arrow) {
        display: none;
    }

</style>