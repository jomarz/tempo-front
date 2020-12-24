<template>
    <div class="article-small-box ">
        <div class="">
            <div class="thumbnail">
                <img src="../assets/img/Pictures/thumbnail1.png" alt="">
            </div>
            <div class="box_info container">
                <div class="row box-title-row no-gutters">
                    <div class="col-3">a</div>
                    <div class="col-9 box-title">b</div>
                </div>
                <div class="row box-content-row no-gutters">
                    <div class="col-3 box-day">c</div>
                    <div class="col-9 box-content">d</div>
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
    .article-small-box {
        width: 330px;
        display: inline-block;
        margin-bottom: 40px;
        .thumbnail {
            width: 130px;
            float: left;
        }
        .thumbnail img {
            height: 128px;
            width: 130px;
        }
        .box_info {
            width: 200px;
            float: left;
            padding-left: 25px;
            padding-right: 0px;
        }
        .box-title-row {
            border-bottom: 2px solid #d1d3d4;
            height: 38px;
        }
        .box-title-row, .box-content-row {
            margin-left: 0px;
            margin-right: 0px;
        }
        .box-content-row {
            height: 90px;
        }
        .box-content, .box-title {
            border-left: 2px solid #d1d3d4;
        }
    }
</style>