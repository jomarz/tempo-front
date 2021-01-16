<template>
    <div class="search-results">
        <div class="results-list">
            <div v-for="result in resultsList" class="search-result" :key="result.id">
                <h2 class="result-title">{{result.title}}</h2>
                <div class="result-subtitle">{{result.subtitle}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        resultsList: { required: true }
    }
}
</script>

<style lang="scss" scoped>
.search-result {
    background-color: white;
    .result-title {
        color: #278de2;
    }
    .result-subtitle {
        color: #808285;
    }
}

</style>