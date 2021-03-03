<template>
    <div class="printed-vertical">
        <div class="printed-box-column">
            <h3>Ediciones Impresas</h3>
            <PrintedCTA class="printed-cta"/>
            <div class="carousel-column">
                <div class="carousel-box-container" >
                    <printed-small-box v-for="printedElement in printedList" :key="printedElement.key" :boxContent="printedElement" />
                </div>
                <div class="carousel-nav">
                    <a href="" @click.prevent="store.printedEdsCarousel.moveUp()"><img src="..\assets\img\icons\Arrows\YellowArrows_top.svg" alt="up"></a>
                    <a href="" @click.prevent="store.printedEdsCarousel.moveDown()"><img src="..\assets\img\icons\Arrows\YellowArrows_down.svg" alt="down"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store/store.js';
import PrintedCTA from "./PrintedCTA.vue";
import PrintedSmallBox from "./PrintedSmallBox.vue";

export default {
    props: {
        printedList : {
            required: true,
            type: Array
        }
    },
    components: {
        PrintedSmallBox, PrintedCTA
    },
    setup() {
        return { store }
    }
}
</script>

<style lang="scss" scoped>
    .printed-box-column {
        margin-bottom: 20px;
        .carousel-column {
            display: flex;
            justify-content: space-between;
            .carousel-box-container>div {
                display: flex;
                flex-direction: column;
                margin-top: 20px;
            }
            .carousel-nav a{
                display: block;
            }
            .carousel-nav a img {
                width: 17px;
            }
        }
    }
</style>