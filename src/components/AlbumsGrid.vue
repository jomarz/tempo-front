<template>
    <div class="albums-grid container flex-wrap">
        <template v-for="album in albumList" :key="album.id">
            <div class="small-box-container">
                <album-small-box :album="album" />
            </div>
        </template>
    </div>
</template>

<script>
import AlbumSmallBox from './AlbumSmallBox.vue';
export default {
  components: { AlbumSmallBox },
    props: {
        albumList: {
            required: true,
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
    .albums-grid {
        display: flex;
        padding-left: 0;
        .small-box-container {
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 40px;
        }
    }
</style>