<template>
    <div class="media-controls">
        <img src="../assets/img/icons/Media-Video.svg" alt="" class="media-icon" @click="$emit('jump-to-type', 'VideoUrl')">
        <img src="../assets/img/icons/Media-Pictures.svg" alt="" class="media-icon" @click="$emit('jump-to-type', 'imgUrl')">
        <img src="../assets/img/icons/Media-Play.svg" alt="" class="media-icon" @click="$emit('jump-to-type', 'playlistUrl')">
        <img src="../assets/img/icons/Media-Radio.svg" alt="" class="media-icon" @click="$emit('jump-to-type', 'podcast')">
        <img src="../assets/img/icons/Media-Information.svg" alt="" class="media-icon" @click="$emit('jump-to-type', 'timeLineUrl')">
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .media-controls {
        display: flex;
        justify-content: flex-end;
        background-color: black;
        padding: 5px 0;
        .media-icon {
            box-sizing: content-box;
            height: 19px;
            padding: 2px 10px;
            cursor: pointer;
        }
        .media-icon:not(:first-child) {
            border-left: 1px solid white;
        }
    }
</style>