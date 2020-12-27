<template>
    <div class="printed-vertical">
        <div class="printed-box-column">
            <h3>Ediciones Impresas</h3>
            <div class="printed-box-container" v-for="printedElement in printedList" :key="printedElement.key" >
                <printed-small-box :printedElement="printedElement" />
            </div>
        </div>
        <PrintedCTA />
    </div>
</template>

<script>
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
    }    
}
</script>

<style lang="scss" scoped>
    .printed-box-column {
        margin-bottom: 20px;
        .printed-box-container {
            margin-top: 25px;
        }
    }
</style>