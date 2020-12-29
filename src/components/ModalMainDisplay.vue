<template>
    <div class="main-display">
        <div class="info-box"></div>
        <div class="media-box"></div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .main-display {
        width: 100%;
        display: flex;
        .info-box {
            width: 215px;
            height: 298px;
            background-color: darkblue;
        }
        .media-box {
            width: 504px;
            height: 298px;
            background-color: gray;
        }
    }
</style>