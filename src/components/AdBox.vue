<template>
    <div class="ad-box">
        <template v-if="ad">
            <a :href="ad.linkUrl"><img :src="ad.imgUrl" alt="" class="ad-img"></a>
        </template>
        <div v-else class="empty-ad"></div>
        <!-- <img v-else src="https://picsum.photos/id/1002/1200/200" alt="" class="ad-img"> -->
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
        max-height: 200px;
        width: 100%;
        background-color: black;
        overflow: hidden;
        img {
            width: 100%;
            object-position: left;
            object-fit: cover;
        }
        .empty-ad {
            width: 100%;
            background-color: white;
        }
    }
</style>