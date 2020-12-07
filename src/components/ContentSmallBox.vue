<template>
    <div class="content-small-box container">
            <div class="col-5 thumbnail">
                <img src="../assets/img/Pictures/thumbnail1.png" alt="">
            </div>
            <div class="col-7 box_info container">
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
        display: flex;
        box-sizing: content-box;
        height: 128px;
        margin-left: 20px;
        margin-bottom: 40px;
        .thumbnail img {
                height: 128px;
        }
        .box-title-row {
            border-bottom: 1px solid #d1d3d4;
            height: 30%
        }
        .box-content-row {
            height: 70%;
        }
        .box-content, .box-title {
            border-left: 1px solid #d1d3d4;
        }
    }
</style>