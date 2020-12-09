<template>
    <div class="content-small-box container">
        <div class="row">
            <div class="col-5 thumbnail">
                <img src="../assets/img/Pictures/thumbnail1.png" alt="">
            </div>
            <div class="col-7 box_info container">
                <div class="row box-title-row no-gutters">
                    <div class="col-3"></div>
                    <div class="col-9 box-title"></div>
                </div>
                <div class="row box-content-row no-gutters">
                    <div class="col-3 box-day"></div>
                    <div class="col-9 box-content"></div>
                </div>
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
        //display: flex;
        //box-sizing: content-box;
        margin-bottom: 40px;
        .thumbnail img {
            height: 128px;
        }
        .box_info.container {
            padding-left: 25px;
            padding-right: 0px;
        }
        .box-title-row {
            border-bottom: 2px solid #d1d3d4;
            height: 30%
        }
        .box-title-row, .box-content-row {
            margin-left: 0px;
            margin-right: 0px;
        }
        .box-content-row {
            height: 70%;
        }
        .box-content, .box-title {
            border-left: 2px solid #d1d3d4;
        }
    }
</style>