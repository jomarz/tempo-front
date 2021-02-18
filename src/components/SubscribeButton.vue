<template>
    <div class="subscribe-button">
        <button class="receive-button" @click="store.toggleSubscribe()">RECIBIR</button>
    </div>    
</template>

<script>
import store from '../store/store.js';
export default {
    props: { subscriptionType: {} },
    setup() {
        return { store };
    }
}
</script>

<style lang="scss" scoped>
    .subscribe-button {
        display: inline-block;
        button {
            padding: 3px 0 1px;
        }
    }
</style>