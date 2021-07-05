<template>
    <div class="article-small-box" @click="openContent(boxContent.permalink, boxContent.id, 0)">
        <div class="">
            <div class="thumbnail">
                <img class="thumbnail-image" :src="boxContent.imgUrl" alt="">
            </div>
            <div class="box_info-container">
                <div class="box-info container">
                    <div class="row box-title-row no-gutters">
                        <div class="box-info-left col-1"></div>
                        <div class="box-info-right col-11 box-title">
                            <h6 class="article-title" v-html="boxContent.title"></h6>
                            <span class="box-subtitle" v-html="boxContent.subtitle"></span>
                        </div>
                    </div>
                    <div class="row box-content-row no-gutters">
                        <div class="box-info-left col-1 box-day"></div>
                        <div class="box-info-right col-11 box-content">
                            <p class="box-text" v-html="boxContent.description"></p>
                            <read-more-link contentType="article" :contentPermalink="boxContent.permalink" isEvent="0" :contentName="boxContent.title" :contentId="boxContent.id"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import ReadMoreLink from './ReadMoreLink.vue';
import String from '../classes/Stringer';

export default {
  components: { ReadMoreLink },
    props: {
        boxContent: {
            required: true,
            type: Object
        }
    },
    methods: {
        toLowerFirstUpper(string)
        {
            return String.toLowerFirstUpper(string);
        },
        openContent(permalink, id, isEvent) {console.log({permalink, id, isEvent});
            if (isEvent == 1)   this.$router.push('/evento/'+permalink);
            else                this.$router.push('/articulo/'+permalink);
        }
    }
}
</script>

<style lang="scss" scoped>
    .article-small-box {
        //width: 392px;
        display: inline-block;
        margin-bottom: 40px;
        cursor: pointer;
        .thumbnail {
            width: 196px;
            float: left;
        }
        .thumbnail img {
            height: 147px;
            width: 196px;
            object-fit: cover;
        }
        .box_info-container {
            width: 196px;
            height: 147px;
            float: left;
            background-color: #f1f2f2;
        }
        .box-info {
            padding: 10px 8px 10px 5px;
        }
        .box-info-left {
            padding-left: 0px;
            padding-right: 0px;
        }
        .box-info-right {
            padding-left: 8px;
            padding-right: 0;
        }
        .box-title-row {
            border-bottom: 2px solid #fff;
            height: 59px;
        }
        .box-content-row {
            height: 70px;
        }
        .box-title-row, .box-content-row {
            margin-left: 0px;
            margin-right: 0px;
        }
        .box-content {
            height: 100%;
            padding-top: 2px;
            padding-bottom: 2px;
        }
        .box-content, .box-title {
            border-left: 2px solid #fff;
        }
        .box-content {
            padding-right: 2px;
        }
        .box-title {
            padding-top: 1px;
        }
        .box-subtitle {
            padding-top: 2px;
            line-height: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 0.62rem !important;
            font-weight: 700;
            letter-spacing: 0.005rem;
        }
        .box-text {
            font-size: 0.63rem !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .article-title {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
    
    @media only screen and (min-width: 850px) and (max-width: 1199px) {
        .article-small-box {
            //width: 332px;
            .thumbnail {
                width: 166px;
            }
            .thumbnail img {
                width: 176px;
                height: 147px;
            }
            .box_info-container {
                width: 176px;
                height: 147px;
            }
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 849px) {
        .article-small-box {
            //width: 332px;
            .thumbnail {
                width: 166px;
            }
            .thumbnail img {
                width: 166px;
                height: 147px;
            }
            .box_info-container {
                width: 166px;
                height: 147px;
            }
        }
    }
    @media only screen and (max-width: 767px) {
        .article-small-box {
            margin-bottom: 30px;
        }
    }
</style>