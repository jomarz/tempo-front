<template>
    <div class="content-small-box container">
            <div class="col-5 thumbnail"></div>
            <div class="col-7 box_info">
                <div class="row box-title-row">
                    <div class="col-2"></div>
                    <div class="col-10 box-title"></div>
                </div>
                <div class="row box-content-row">
                    <div class="col-2 box-day"></div>
                    <div class="col-10 box-content"></div>
                </div>
            </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .content-small-box {
        height: 128px;
        .thumbnail {
                display: block;
                background-image: url('../assets/img/tempo_logo.svg');
                background-size: contain;
                background-repeat: no-repeat;
                height: 100%;
        }
    }
</style>