<template>
    <div class="news-vertical">
        <div class="news-box-column">
            <div class="carousel-column">
                <h3>Noticias</h3>
                <div class="carousel-box-container" >
                    <news-small-box v-for="newsElement in newsList" :key="newsElement.key" :boxContent="newsElement" />
                </div>
            </div>
            <div class="carousel-nav">
                <a href="" @click.prevent="store.newsCarousel.moveUp()"><img src="..\assets\img\icons\Arrows\YellowArrows_top.svg" alt="up"></a>
                <a href="" @click.prevent="store.newsCarousel.moveDown()"><img src="..\assets\img\icons\Arrows\YellowArrows_down.svg" alt="down"></a>
            </div>
        </div>
        <NewsCTA />
    </div>
</template>

<script>
import store from '../store/store.js';
import NewsCTA from "./NewsCTA.vue";
import NewsSmallBox from "./NewsSmallBox.vue";

export default {
    props: {
        newsList : {
            required: true,
            type: Array
        }
    },
    components: {
        NewsSmallBox, NewsCTA
    },
    setup() {
        return { store }
    }
}
</script>

<style lang="scss" scoped>
    .news-vertical {
        max-width: 270px;
        border-left: 1px solid #d1d3d4;
        padding-left: 25px;
    }
    .news-box-column {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .carousel-column {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .carousel-box-container>div {
                display: flex;
                flex-direction: column;
                margin-top: 20px;
            }
        }
        .carousel-nav {
            margin-left: 10px;
        }
        .carousel-nav a{
            display: block;
        }
        .carousel-nav a img {
            width: 17px;
        }
    }
</style>