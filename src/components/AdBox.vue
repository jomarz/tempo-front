<template>
    <div class="ad-box">
        <template v-if="ad">
            <a :href="ad.linkUrl"><img :src="ad.imgUrl" alt="" class="ad-img"></a>
        </template>
        <img v-else src="https://picsum.photos/id/1002/1200/200" alt="" class="ad-img">
    </div>
</template>

<script>
export default {
    props: {
        ad: { required: true, type: Object }
    }
}
</script>

<style lang="scss" scoped>
    .ad-box {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        background-color: black;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-position: left;
            object-fit: cover;
        }
    }
</style>